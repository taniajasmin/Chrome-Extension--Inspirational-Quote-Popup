document.getElementById("generate").onclick = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const pageText = await chrome.tabs.sendMessage(tab.id, {
    type: "GET_PAGE_TEXT"
  });

  chrome.runtime.sendMessage(
    {
      type: "GENERATE_QUOTE",
      context: pageText.text
    },
    (res) => {
      document.getElementById("quote").innerText = res.quote;
    }
  );
};
