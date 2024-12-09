// Function to toggle the menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Modal functionality
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");

// Open modal when an image is clicked
document.querySelectorAll(".project-img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src; // Set modal image to the clicked image
  });
});

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Close modal when clicking outside the modal image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal when the close button is clicked
document.querySelector(".close").addEventListener("click", closeModal);
