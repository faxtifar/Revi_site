import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const homeSource = fs.readFileSync(path.resolve(__dirname, "pages/Home.tsx"), "utf8");

describe("Revi social links", () => {
  it("marks the real TikTok profile", () => {
    expect(homeSource).toContain('https://www.tiktok.com/@revi_robloxer');
    expect(homeSource).toContain('@revi_robloxer');
    expect(homeSource).not.toContain('@shadoww7682');
  });
});
