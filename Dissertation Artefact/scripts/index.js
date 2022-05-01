'use strict';

const args = new URLSearchParams(location.search);

document.getElementById('message')
    .textContent = args.get('message') || 'Continue to site?';
const port = chrome.runtime.connect({
    name: 'prompt'
});

document.getElementById('cancel')
    .addEventListener('click', () => {
        port.postMessage({
            method: 'prompt-resolved'
        });
        window.close();
    });

document.getElementById('ok')
    .addEventListener('click', () => {
        port.postMessage({
            method: 'prompt-resolved'
        });

        location.href("https://www.tutorialspoint.com");
        window.close();
    });