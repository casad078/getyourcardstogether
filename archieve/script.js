// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image and caption
var modalImage = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Get all images in the gallery
var images = document.querySelectorAll(".clickable-image");

// Iterate through each image and add click event listener
images.forEach(function(image) {
  image.addEventListener("click", function() {
    modal.style.display = "block";
    modalImage.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Get the <span> element to close the modal
var closeModal = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}
