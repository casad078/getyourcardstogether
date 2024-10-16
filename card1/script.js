window.onload = function() {
    const gif = document.getElementById('gif');
    const staticImage = document.getElementById('static-image');
  
    const gifDuration = 11500; // Set the GIF duration in milliseconds (adjust as needed)
  
    // After the set duration, hide the GIF and show the static image
    setTimeout(() => {
      gif.style.display = 'none';
      staticImage.style.display = 'block';
    }, gifDuration);
  };
  
  const text = "The Fool seems to have gone over the edge. Click the subjects of the card to learn their meanings.";  // Single sentence to display
  const typingSpeed = 40;      // Milliseconds per character
  const delayBeforeTyping = 11500; // Delay in milliseconds (2 seconds)
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
  
  // Add a delay before starting the typing effect
  setTimeout(() => {
      typeText(text);
  }, delayBeforeTyping);
  