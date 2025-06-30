Not affiliated with Fortnite.GG

# Fortnite Island Lookup

A web extension that lets you quickly look up Fortnite island codes on fortnite.gg.

## Features

- Right-click on any Fortnite island code to open it on fortnite.gg
- Works on any webpage
- Validates that the selected text is in the correct format (xxxx-xxxx-xxxx)
- Shows a notification if the selected text is not a valid island code

## Installation

### Chrome Web Store

[Install from Chrome Web Store](https://chromewebstore.google.com/detail/nfmmhlnaenciadmlaifjmcldfklemieb?utm_source=item-share-cb)

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
│   ├── discord.svg      # Discord icon
│   ├── x.svg            # X (Twitter) icon
│   └── icons/           # Extension icons
│       ├── icon16.png
│       ├── icon48.png
│       └── icon128.png
├── .gitignore           # Git ignore file
└── README.md            # This file
```

## Technical Details

- Uses Chrome's contextMenus API to add the right-click menu option
- Validates island codes based on the format: 0000-0000-0000
- Opens fortnite.gg URLs in the format: `https://fortnite.gg/island?code=xxxx-xxxx-xxxx`
- Shows notifications using a custom DOM element that removes itself after 5 seconds

## License

Copyright © 2024 VukeFN. All rights reserved.
    
This software and associated code files (the "Software") are
copyrighted by VukeFN and are protected by copyright law and international
treaties. VukeFN, also known as Vuke or the owner of VukeFN, holds the copyright for
this Software.
    
You are granted a non-exclusive, non-transferable license to use
and modify the Software for your personal, internal business, or commercial
purposes. Redistribution, resale, or sharing of the Software or any
modified versions of it is strictly prohibited without prior written
permission from VukeFN.

The Software is provided "as is", without warranty of any kind, express or
implied, including but not limited to the warranties of merchantability,
fitness for a particular purpose, or non-infringement. In no event shall
VukeFN be liable for any claim, damages, or other liability, whether in an
action of contract, tort, or otherwise, arising from, out of, or in
connection with the Software or the use or other dealings in the Software.

Unauthorized use, reproduction, redistribution, resale, or sharing of this
Software, or any derivative works, is prohibited and may result in legal
action. In the event of infringement, VukeFN may seek to recover actual
damages, any profits obtained by the infringer, and/or statutory damages
as permitted by applicable copyright law. For permissions or inquiries,
please contact VukeFN at vukefnbusiness@gmail.com or through a private 
message on [X at @vukefn](https://x.com/vukefn).

## Credits & Contributions

Created by VukeFN [<img src="assets\x.svg" alt="X icon" width="16" style="vertical-align: middle"/>](https://x.com/vukefn) [<img src="assets\discord.svg" alt="X icon" width="16" style="vertical-align: middle"/>](https://discord.com/users/611107142560382976)
