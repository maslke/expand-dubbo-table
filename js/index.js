(function (context) {
    document.getElementById('expand').onclick = function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'expand');
        });
    }
    
    document.getElementById('reset').onclick = function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'reset');
        });
    }
}(window));



