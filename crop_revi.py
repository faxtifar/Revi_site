from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/upload/IMG_20260817_131507_440.jpg')
out = Path('/home/ubuntu/revi_site/client/public/assets')
out.mkdir(parents=True, exist_ok=True)
img = Image.open(source).convert('RGB')

# Profile avatar crop from screenshot
img.crop((240, 100, 480, 340)).save(out / 'revi-avatar.jpg', quality=95, optimize=True)

# Post thumbnails crop from the 3x2 grid in the screenshot
boxes = {
    'revi-post-1.jpg': (0, 560, 240, 780),
    'revi-post-2.jpg': (240, 560, 480, 780),
    'revi-post-3.jpg': (480, 560, 720, 780),
    'revi-post-4.jpg': (0, 780, 240, 1020),
    'revi-post-5.jpg': (240, 780, 480, 1020),
    'revi-post-6.jpg': (480, 780, 720, 1020),
}
for name, box in boxes.items():
    crop = img.crop(box)
    crop.save(out / name, quality=92, optimize=True)

print("Successfully cropped Revi real assets:", list(out.glob("revi-*")))
