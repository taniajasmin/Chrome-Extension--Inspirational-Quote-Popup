chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GET_PAGE_TEXT") {
    const text = document.body.innerText.slice(0, 2000);
    sendResponse({ text });
  }
});
