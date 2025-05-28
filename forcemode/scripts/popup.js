document.addEventListener('DOMContentLoaded', async () => {
    const toggleBtn = document.getElementById('toggle');
    const host = await getCurrentHost();

    // Check current site status
    chrome.storage.sync.get(['darkSites'], ({ darkSites = [] }) => {
        const isEnabled = darkSites.includes(host);
        updateUI(isEnabled);
    });

    toggleBtn.addEventListener('click', async () => {
        const { darkSites = [] } = await chrome.storage.sync.get('darkSites');
        const currentIndex = darkSites.indexOf(host);
        
        if (currentIndex === -1) {
            darkSites.push(host);
        } else {
            darkSites.splice(currentIndex, 1);
        }
        
        await chrome.storage.sync.set({ darkSites });
        
        const isEnabled = currentIndex === -1;
        updateUI(isEnabled);
        
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'toggle',
                enabled: isEnabled
            });
        });
    });
});

async function getCurrentHost() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return new URL(tab.url).hostname;
}

function updateUI(isEnabled) {
    const toggleBtn = document.getElementById('toggle');
    toggleBtn.textContent = isEnabled ? 'Disable Dark Mode' : 'Enable Dark Mode';
    toggleBtn.classList.toggle('active', isEnabled);
}
