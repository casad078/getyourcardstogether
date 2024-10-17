const texts = [
    "Your tarot reading with The Fool, The Hanged Man, and The Hermit presents a powerful narrative about personal growth, new beginnings, and introspection.",
    "The Fool represents the start of a new journey, an invitation to embrace adventure and the unknown. It suggests a willingness to take risks and a sense of optimism or naivety. This card can indicate that you're on the verge of something new, a fresh start or opportunity where you are encouraged to trust yourself and the path ahead.",
    "The Hanged Man often symbolizes a period of waiting or suspension. It suggests that now might be a time for reflection and letting go of control, as you seek a new perspective. This card can indicate that you're in a state of limbo, needing to embrace a change in thinking or attitude. Sometimes, it reflects a sacrifice or a delay that is ultimately for your greater good.",
    "The Hermit encourages a time of inner reflection and withdrawal from external distractions. It’s about searching for personal truth and guidance through introspection. This card may suggest that you need solitude to understand your deeper desires or spiritual goals, or that you're seeking enlightenment by turning inward.",
    "The Fool marks the beginning of an adventure, where you're asked to embrace the unknown and take a leap of faith. The Hanged Man introduces a pause or a shift in perspective, asking you to release old patterns of thinking and accept a new way of seeing things. This could be a necessary time of surrender before you can continue forward.The Hermit points to deep introspection during this journey. It suggests that you’ll find your answers not in external sources but by turning inward, perhaps during a period of solitude or reflection.",
    "In this context, your reading could indicate that you are entering a phase of significant personal growth, with a need for both trust in the process (The Fool) and time for self-reflection (The Hanged Man and The Hermit). There may be challenges or delays, but ultimately, it’s a journey toward greater wisdom and self-understanding.",
    "There you are dear. I hope i've provided you some insight on your journey. Come again soon."
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
    