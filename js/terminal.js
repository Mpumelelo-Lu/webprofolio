const initialText = `C:\\System32>initialize_sequence.exe
[OK] Loading system components...
[OK] Network protocols initialized
[OK] Security modules loaded
[OK] System check complete
[OK] Terminal access granted

Press Enter or tap screen to start`;

const terminalText = document.getElementById('terminal-text');
let charIndex = 0;

function typeText() {
    if (charIndex < initialText.length) {
        terminalText.textContent += initialText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 20);
    } else {
        terminalText.innerHTML += '<span class="cursor active">&nbsp;</span>';
    }
}

function startTransition() {
    terminalText.textContent = "Running prompt...";
    setTimeout(() => {
        window.location.href = 'menu.html';
    }, 2000);
}

typeText();

// Handle both keyboard and touch/click events
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        startTransition();
    }
});

document.addEventListener('click', function() {
    if (charIndex >= initialText.length) {
        startTransition();
    }
});

// Prevent default touch behavior on mobile
document.addEventListener('touchstart', function(event) {
    if (charIndex >= initialText.length) {
        event.preventDefault();
        startTransition();
    }
});
