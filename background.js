const GEMINI_API_KEY = "AI________";

console.log("Background worker running");

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "GENERATE_QUOTE") {
    (async () => {
      try {
        const prompt = `
User is working on the following content:
"${req.context}"

Give ONE short motivational sentence.
`;

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }]
            })
          }
        );

        const data = await res.json();

        // LOG INSIDE SCOPE
        console.log("Gemini raw response:", data);

        const quote =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "Keep going. You're doing great.";

        sendResponse({ quote });
      } catch (error) {
        console.error("Gemini error:", error);
        sendResponse({
          quote: "Stay focused. Progress matters."
        });
      }
    })();

    return true; // keep service worker alive
  }
});
