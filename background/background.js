chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "lookupOnFortniteGG",
    title: "View island on Fortnite.GG",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "lookupOnFortniteGG") {
    const selectedText = info.selectionText;

    if (/^\d{4}-\d{4}-\d{4}$/.test(selectedText)) {
      const url = `https://fortnite.gg/island?code=${selectedText}`;
      chrome.tabs.create({ url: url });
    } else {
      chrome.tabs.get(tab.id, (tabInfo) => {
        if (chrome.runtime.lastError) {
          console.log("Tab error:", chrome.runtime.lastError.message);
          return;
        }

        if (
          tabInfo.url.startsWith("chrome://") ||
          tabInfo.url.startsWith("chrome-extension://") ||
          tabInfo.url.startsWith("devtools://")
        ) {
          console.log("Cannot send messages to this tab type:", tabInfo.url);
          return;
        }

        chrome.tabs.sendMessage(
          tab.id,
          {
            action: "showNotification",
            message: "Not an island code.",
          },
          (response) => {
            if (chrome.runtime.lastError) {
              console.log("Message error:", chrome.runtime.lastError.message);
            }
          }
        );
      });
    }
  }
});
