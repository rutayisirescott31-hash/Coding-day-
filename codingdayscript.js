

// script.js

// Run when the page loads
window.onload = function() {
  alert("Welcome to Scott's website! 🚀");
  console.log("Scott loves coding, football, and playing games!");
};

// Function to change background color randomly
function changeBackground() {
  const colors = ["#1e3c72", "#2a5298", "#ff9900", "#28a745", "#6f42c1"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

// Add a pulsing animation to the Contact Me button
document.addEventListener("DOMContentLoaded", function() {
  const contactBtn = document.querySelector(".contact-button");
  if (contactBtn) {
    contactBtn.addEventListener("mouseover", function() {
      contactBtn.style.animation = "pulse 1s infinite";
    });
    contactBtn.addEventListener("mouseout", function() {
      contactBtn.style.animation = "none";
    });
  }
});
