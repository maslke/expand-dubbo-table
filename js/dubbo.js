chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var sections = document.getElementsByClassName('content-section');
    if (request === 'expand') {
        if (sections.length !== 0) {
            var section = sections[0];
            section.classList.add('content-section-custom');
        }
    };
    if (request === 'reset') {
        if (sections.length !== 0) {
            var section = sections[0];
            section.classList.remove('content-section-custom');
        }
    };
    sendResponse('done');
    return true;
});