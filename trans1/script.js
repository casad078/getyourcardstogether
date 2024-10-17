const texts = [
    "You pulled the Fool.",
    "The Fool is a card of new beginnings, opportunity and potential. Just like the young man, you are at the outset of your journey, standing at the cliff‘s edge, and about to take your first step into the unknown.",
    "Even though you don’t know exactly where you are going, you are being called to commit yourself and follow your heart, no matter how crazy this leap of faith might seem to you.",
    "As you undertake this new journey, the Fool encourages you to have an open, curious mind and a sense of excitement. Throw caution to the wind and be ready to embrace the unknown, leaving behind any fear, worry or anxiety about what may or may not happen.",
    "This is about new experiences, personal growth, development, and adventure.",
    "Seriously, what are you waiting for?",
    "Click the next card to continue your reading."
];

let currentTextIndex = 0;
const typingSpeed = 40; // milliseconds per character

const textContainer = document.getElementById('text-container');
const continueBtn = document.getElementById('continue-btn');

// Make sure the button is visible initially
continueBtn.style.display = 'block';

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
        continueBtn.style.display = 'block'; // Ensure the button is visible
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
 * Hides the "Continue" button after all text is shown.
 */
function hideContinueButton() {
    continueBtn.style.display = 'none'; // Hide the button
}

// Initial text display
showNextText();

// Event listener for the "Continue" button
continueBtn.addEventListener('click', showNextText);
