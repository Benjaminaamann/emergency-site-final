// ========================================
// DARK MODE TOGGLE FUNCTIONALITY
// ========================================

// Get the dark mode toggle checkbox
const darkModeToggle = document.getElementById("darkModeSwitch");

// Check if dark mode toggle exists on the page
if (darkModeToggle) {
  // Check for saved dark mode preference in localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  // Add event listener to toggle dark mode
  darkModeToggle.addEventListener("change", function () {
    if (this.checked) {
      // Enable dark mode
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      // Disable dark mode
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
}
