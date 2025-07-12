document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting initially

  const password = document.getElementById("password").value;
  const errorField = document.getElementById("passwordError");

  // Password validation conditions
  const minLength = /.{8,}/;
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const number = /[0-9]/;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (
    !minLength.test(password) ||
    !upperCase.test(password) ||
    !lowerCase.test(password) ||
    !number.test(password) ||
    !specialChar.test(password)
  ) {
    errorField.textContent =
      "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
  } else {
    errorField.textContent = "";
    // Submit form after validation
    this.submit(); // Now allow form to submit
  }
});
