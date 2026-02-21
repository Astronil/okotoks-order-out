# PWA Icons Required

This PWA requires the following icon files in the `public` directory:

- `pwa-192x192.png` - 192x192 pixels (for Android home screen)
- `pwa-512x512.png` - 512x512 pixels (for splash screens and high-res displays)

## How to Create Icons

1. Create a square logo image (at least 512x512px)
2. Export as PNG with transparent background (if applicable)
3. Create two versions:
   - 192x192px → save as `pwa-192x192.png`
   - 512x512px → save as `pwa-512x512.png`
4. Place both files in the `public/` directory

## Icon Design Tips

- Use the Triple O logo or "OOO" design
- Ensure icons are clear and recognizable at small sizes
- Use brand colors (deep navy #0f172a and orange #ea580c)
- Test on both light and dark backgrounds

## Temporary Solution

Until icons are added, the PWA will still work but may show default browser icons.
The vite-plugin-pwa will generate the manifest, but icons need to be manually added.

