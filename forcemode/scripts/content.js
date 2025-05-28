let isEnabled = false;

function toggleDarkMode(enabled) {
    document.documentElement.classList.toggle('dark-mode', enabled);
}

// Listen for toggle messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggle') {
        toggleDarkMode(request.enabled);
        sendResponse({ success: true });
    }
});

// Check initial state
const host = window.location.hostname;
chrome.storage.sync.get(['darkSites'], ({ darkSites = [] }) => {
    const enabled = darkSites.includes(host);
    toggleDarkMode(enabled);
});
