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
      chrome.tabs.sendMessage(tab.id, {
        action: "showNotification",
        message: "Not an island code.",
      });
    }
  }
});
