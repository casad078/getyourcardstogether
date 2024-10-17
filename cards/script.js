const text = "Here I have pulled three cards. Flip over the first one.";  // Single sentence to display
const typingSpeed = 40;      // Milliseconds per character
const textContainer = document.getElementById('text-container');

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

typeText(text);
