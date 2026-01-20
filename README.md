# Chrome-Extension--Inspirational-Quote-Popup

A Chrome extension that delivers **short, powerful, context-aware motivational quotes** based on the webpage you're currently viewing — powered by Google's Gemini AI.

Turn every tab into a moment of inspiration.

## Features

- One-click motivational boost from the browser action popup
- Quotes tailored to the actual content of the page
- Uses fast & efficient **Gemini 1.5 Flash** model
- Clean, minimal popup design
- Extracts only visible text (limited to ~3000 chars)

## Demo

<!-- Add screenshots later if you take any -->
<!-- ![Extension popup](screenshots/popup.png) -->

## How to Install (Developer Mode)

1. Clone or download this repository
2. Open Chrome and navigate to:  
   `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **Load unpacked**
5. Select the folder containing the extension files
6. The extension icon should appear in your toolbar

## Important: Gemini API Key

The current code contains a **public/hardcoded API key**:

```js
const GEMINI_API_KEY = "AIza__________";
```


## This is insecure and the key will likely be revoked soon.
Recommended fix:

1. Generate your own free Gemini API key:
→ https://aistudio.google.com/app/apikey
2. Replace the key in background.js:

```Java
Scriptconst GEMINI_API_KEY = "API_KEY_HERE";
```
Better long-term options:

- Prompt the user to enter their key on first use
- Store it securely using chrome.storage.local

## Project Structure
```text
├── manifest.json       # Extension configuration (Manifest V3)
├── background.js       # Service worker – calls Gemini API
├── content.js          # Content script – extracts visible page text
├── popup.html          # Popup UI
├── popup.js            # Popup logic
├── styles.css          # Popup styling
└── icons/              # Extension icons (16×16, 48×48, 128×128)
```

## Security & Privacy Notes

The extension sends up to ~2000 characters of page text to Google's Gemini API
Avoid using on pages with sensitive/private information
No data is stored or sent anywhere else

## Future Improvement Ideas

Custom quote styles (intense, calm, sarcastic, stoic…)
Save / favorite quotes
Optional daily motivation notifications
Dark mode for popup
Better context (page title + meta description + main headings)
Support for other models (OpenAI, Groq, local WebLLM…)
First-time setup flow for API key
