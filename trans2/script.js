const texts = [
    "The hanged man understands that his position is a sacrifice that he needed to make in order to progress forward - whether as repentance for past wrongdoings, or a calculated step backward to recalculate his path onward. ",
    "This time he spends here will not be wasted, he does this as part of his progression forward.",
    "His upside down state can also symbolize the feeling of those that walk a spiritual path, for they see the world differently. Where there are others that do not understand the need to sacrifice, you see it differently.",
    "This is a natural course of action for you as you walk the path alone.",
    "The Hanged Man card reflects a particular need to suspend certain action. As a result, this might indicate a certain period of indecision.",
    "This means that certain actions or decisions which need to be properly implemented are likely to be postponed even if there is an urgency to act at this particular moment. In fact, it would be ultimately the best if you are capable of stalling certain actions in order to ensure that you have more time to reflect on making critical decisions, this will ultimately be the best.",
    "Click the last card to finalize your reading."
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
