const text = "The Fool seems to have gone over the edge. Click the subjects of the card to learn their meanings.";  // Single sentence to display
const typingSpeed = 40;      // Milliseconds per character
const textContainer = document.getElementById('text-container');

/**
 * Types out the given text in the textContainer with a typing effect.
 * @param {string} text - The text to type out.
 */
function typeText(text) {
    let index = 0;
    textContainer.innerHTML = ''; // Clear previous text

    const interval = setInterval(() => {
        textContainer.innerHTML += text.charAt(index);
        index++;
        if (index === text.length) {
            clearInterval(interval);  // Stop the interval when done
        }
    }, typingSpeed);
}

// Initial text display (no button, no continuation, just the first sentence)
typeText(text);