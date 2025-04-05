Not affiliated with Fortnite.GG

# Fortnite Island Lookup

A web extension that lets you quickly look up Fortnite island codes on fortnite.gg.

## Features

- Right-click on any Fortnite island code to open it on fortnite.gg
- Validates that the selected text is in the correct format (xxxx-xxxx-xxxx)
- Shows a notification if the selected text is not a valid island code
- Works on any webpage

## Installation

### Chrome Web Store

_Coming soon_

### Firefox Add-ons

_Coming soon_

### Microsoft Edge Add-ons

_Coming soon_

### From Source (Developer Mode)

#### Chrome

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top-right corner
4. Click "Load unpacked" and select the extension folder
5. The extension is now installed and ready to use

## How to Use

1. Find a Fortnite island code on any webpage (format: xxxx-xxxx-xxxx)
2. Select/highlight the code
3. Right-click on the selection
4. Click "View island on Fortnite.GG" from the context menu
5. A new tab will open with the island details on fortnite.gg

## File Structure

```
fortnite-island-lookup/
├── manifest.json         # Extension configuration
├── background/           # Background scripts
│   └── background.js     # Handles context menu and validation
├── content/              # Content scripts
│   └── content.js        # Handles notifications
├── assets/               # Static assets
│   └── icons/            # Extension icons
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
└── README.md             # This file
```

## Technical Details

- Uses Chrome's contextMenus API to add the right-click menu option
- Validates island codes based on the format: 0000-0000-0000
- Opens fortnite.gg URLs in the format: `https://fortnite.gg/island?code=xxxx-xxxx-xxxx`
- Shows notifications using a custom DOM element that removes itself after 5 seconds

## License

All Rights Reserved

This project is publicly available on GitHub for reference and educational purposes only. No permission is granted for use, modification, or distribution of this code without explicit prior written permission from the author. If you're interested in using this code, please contact the author directly.

## Credits

Created by VukeFN [<img src="assets\x.svg" alt="X icon" width="16" style="vertical-align: middle"/>](https://x.com/vukefn) [<img src="assets\discord.svg" alt="X icon" width="16" style="vertical-align: middle"/>](https://discord.com/users/611107142560382976)
