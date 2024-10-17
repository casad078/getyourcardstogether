const texts = [
    "Hello dear.",
    "You're a lost soul, aren't you?",
    "My.",
    "Well, come closer then.",
    "I will bring you guidance."
];

let currentTextIndex = 0;
const typingSpeed = 40; // milliseconds per character

const textContainer = document.getElementById('text-container');
const continueBtn = document.getElementById('continue-btn');

// Disable button initially until typing is done
continueBtn.disabled = true;

/**
 * Types out the given text in the textContainer with a typing effect.
 * @param {string} text - The text to type out.
 * @param {function} callback - Function to call after typing is complete.
 */
function typeText(text, callback) {
    let index = 0;
    textContainer.innerHTML = ''; // Clear previous text

    const interval = setInterval(() => {
        textContainer.innerHTML += text.charAt(index);
        index++;
        if (index === text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, typingSpeed);
}

/**
 * Displays the next text block or hides the button if it's the last text.
 */
function showNextText() {
    if (currentTextIndex < texts.length) {
        continueBtn.disabled = true; // Disable button during typing
        typeText(texts[currentTextIndex], () => {
            continueBtn.disabled = false; // Enable button after typing
        });
        currentTextIndex++;
    } else {
        // All texts have been displayed; hide the button
        hideContinueButton();
    }
}

/**
 * Hides the "Continue" button.
 */
function hideContinueButton() {
    continueBtn.style.display = 'none'; // Hide the button
}

// Initial text display
showNextText();

// Event listener for the "Continue" button
continueBtn.addEventListener('click', showNextText);
