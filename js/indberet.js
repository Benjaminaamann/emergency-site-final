// Get form and success message elements
const form = document.getElementById("observationForm");
const successMessage = document.getElementById("successMessage");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Hide form and show success message
  form.style.display = "none";
  successMessage.style.display = "block";

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Function to show form again
function showForm() {
  form.style.display = "block";
  successMessage.style.display = "none";
  form.reset();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
