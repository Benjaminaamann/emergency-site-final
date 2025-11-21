// Nærkontakt side specifik funktionalitet

// Info button functionality
const infoButtons = document.querySelectorAll(".info-button");
const infoContents = document.querySelectorAll(".info-content");

infoButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons and contents
    infoButtons.forEach((btn) => btn.classList.remove("active"));
    infoContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button
    this.classList.add("active");

    // Show corresponding content
    const target = this.getAttribute("data-target");
    document.getElementById(`${target}-content`).classList.add("active");
  });
});
