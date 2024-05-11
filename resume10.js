// script.js
document.addEventListener("DOMContentLoaded", function() {
  const currentYear = new Date().getFullYear();
  const educationSection = document.querySelector('.education');
  const graduationYear = educationSection.querySelector('p:last-child');
  graduationYear.textContent = "Graduated: May " + currentYear;
});

