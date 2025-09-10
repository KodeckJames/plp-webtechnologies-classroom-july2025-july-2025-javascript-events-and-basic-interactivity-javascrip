// ---------------------------
// Part 1: Event Handling Basics
// ---------------------------
document.getElementById("messageBtn").addEventListener("click", () => {
  document.getElementById("messageArea").textContent =
    "You clicked the button 🎉!";
});

// ---------------------------
// Part 2: Interactive Features
// ---------------------------

// 🌗 Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🔢 Counter Game
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});

// ❓ Collapsible FAQ
const faqBtn = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqBtn.addEventListener("click", () => {
  faqAnswer.classList.toggle("hidden");
});

// ---------------------------
// Part 3: Form Validation
// ---------------------------
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission for validation

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let isValid = true;

  // Reset messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Name validation
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    isValid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters long.";
    isValid = false;
  }

  // If valid
  if (isValid) {
    document.getElementById("formSuccess").textContent =
      "Form submitted successfully! ✅";
    document.getElementById("signupForm").reset();
  }
});
