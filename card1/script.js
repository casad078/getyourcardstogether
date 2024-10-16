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
  