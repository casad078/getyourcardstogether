const texts = [
    "Hello dear.",
    "You're a lost soul, aren't you?",
    "My.",
    "Well, come closer then.",
    "I will bring you guidence."
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
 * Displays the next text block or sets up the redirect if it's the last text.
 */
function showNextText() {
    if (currentTextIndex < texts.length) {
        continueBtn.disabled = true; // Disable button during typing
        typeText(texts[currentTextIndex], () => {
            continueBtn.disabled = false; // Enable button after typing
        });
        currentTextIndex++;
    } else {
        // All texts have been displayed; set up the redirect button
        setupRedirectButton();
    }
}

/**
 * Changes the "Continue" button to a redirect button.
 */
function setupRedirectButton() {
    // Change button text
    continueBtn.textContent = "Continue";

    // Remove existing event listeners by cloning the button
    const newButton = continueBtn.cloneNode(true);
    continueBtn.parentNode.replaceChild(newButton, continueBtn);

    // Set up the new click event to redirect
    newButton.addEventListener('click', () => {
        // Replace the URL below with your desired redirect URL
        window.location.href = 'https://casad078.github.io/getyourcardstogether/cards/index.html';
    });
}

// Initial text display
showNextText();

// Event listener for the "Continue" button
continueBtn.addEventListener('click', showNextText);