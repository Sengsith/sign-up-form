const HAS_BLURRED_CLASS = "has-blurred";
const PASSWORD_MISMATCH = "password-mismatch";
const PASSWORD_WARNING = "password-warning";
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    // Apply has-focused to inputs focused at least once
    // Initial page behavior: Normal input outlines and no red outlines
    if (!e.target.classList.contains(HAS_BLURRED_CLASS)) e.target.classList.add(HAS_BLURRED_CLASS);
  });

  // manipulate mismatched password inputs remove red outline
  if (input.classList.contains("password-input")) {
    input.addEventListener("focus", (e) => {
      e.target.classList.remove(PASSWORD_MISMATCH);
    });
  }
});

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  if (password.value !== confirmPassword.value) {
    password.classList.add(PASSWORD_MISMATCH);
    password.parentNode.classList.add(PASSWORD_WARNING);
    confirmPassword.classList.add(PASSWORD_MISMATCH);
  } else {
    password.classList.remove(PASSWORD_MISMATCH);
    password.parentNode.classList.remove(PASSWORD_WARNING);
    confirmPassword.classList.remove(PASSWORD_MISMATCH);
  }
});
