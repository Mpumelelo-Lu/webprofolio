const spinner = document.querySelector('.spinner');
const loadingText = document.querySelector('.loading-text');
const characters = ['/', '-', '\\', '|'];//its going to change int these characters
let currentIndex = 0;

const loadingMessages = [
    "Initializing system...",
    "Fetching resume data...",
    "Loading achievements...",
    "Decrypting portfolio...",
    "Accessing skill matrix...",
    "Compiling experience...",
    "Processing projects...",
    "Establishing connection..."
];

function updateSpinner() {
    spinner.textContent = characters[currentIndex];
    currentIndex = (currentIndex + 1) % characters.length;
}

let messageIndex = 0;
function updateLoadingText() {
    loadingText.style.animation = 'none';
    loadingText.offsetHeight; // Trigger reflow
    loadingText.style.animation = 'fadeInOut 0.8s ease-in-out';
    loadingText.textContent = loadingMessages[messageIndex];
    messageIndex = (messageIndex + 1) % loadingMessages.length;
}

// Update spinner every 100ms
setInterval(updateSpinner, 100);

// Update loading text every 800ms
const textInterval = setInterval(updateLoadingText, 800);

// Stop the loading sequence after 8 seconds
setTimeout(() => {
    clearInterval(textInterval);
    window.location.href = 'home.html';
}, 4000);
