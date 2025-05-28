chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ darkSites: [] });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getDarkSites') {
        chrome.storage.sync.get(['darkSites'], (result) => {
            sendResponse({ darkSites: result.darkSites || [] });
        });
        return true;
    }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        chrome.storage.sync.get(['darkModeEnabled'], function(result) {
            chrome.tabs.sendMessage(tabId, {
                action: 'toggleDarkMode',
                enabled: result.darkModeEnabled
            }).catch(() => {});
        });
    }
});
