import base64
import json
import os
import subprocess

REPO = "faxtifar/Revi_site"
root = os.getcwd()

def run(*args, input_text=None):
    return subprocess.check_output(list(args), input=input_text, text=True).decode() if input_text is not None else subprocess.check_output(list(args), text=True).decode()

remote_sha = run("gh", "api", f"repos/{REPO}/git/ref/heads/main", "--jq", ".object.sha").strip()
files = run("git", "ls-tree", "-r", "--name-only", "HEAD").splitlines()
tree_entries = []
for rel in files:
    path = os.path.join(root, rel)
    if not os.path.isfile(path):
        continue
    with open(path, "rb") as fh:
        encoded = base64.b64encode(fh.read()).decode()
    blob_payload = json.dumps({"content": encoded, "encoding": "base64"})
    blob_sha = run("gh", "api", "-X", "POST", f"repos/{REPO}/git/blobs", "--input", "-", input_text=blob_payload).strip()
    blob_sha = json.loads(blob_sha)["sha"]
    mode = "100755" if os.access(path, os.X_OK) else "100644"
    tree_entries.append({"path": rel, "mode": mode, "type": "blob", "sha": blob_sha})

tree_payload = json.dumps({"base_tree": remote_sha, "tree": tree_entries})
tree_resp = json.loads(run("gh", "api", "-X", "POST", f"repos/{REPO}/git/trees", "--input", "-", input_text=tree_payload))
message = run("git", "log", "-1", "--format=%s").strip()
commit_payload = json.dumps({"message": message, "tree": tree_resp["sha"], "parents": [remote_sha]})
commit_resp = json.loads(run("gh", "api", "-X", "POST", f"repos/{REPO}/git/commits", "--input", "-", input_text=commit_payload))
ref_payload = json.dumps({"sha": commit_resp["sha"], "force": False})
run("gh", "api", "-X", "PATCH", f"repos/{REPO}/git/refs/heads/main", "--input", "-", input_text=ref_payload)
print(commit_resp["sha"])
