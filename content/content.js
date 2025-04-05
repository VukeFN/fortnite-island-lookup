chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showNotification") {
    const notification = document.createElement("div");
    notification.textContent = message.message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 15px;
        background-color: #2f3136;
        color: #fff;
        border: 2px solid #8e9297;
        border-radius: 24px;
        z-index: 9999;
        font-family: Arial, sans-serif;
      `;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  }
});
