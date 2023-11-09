document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form elements
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#pwd");
    const confirmPasswordInput = document.querySelector("#confirmPwd");

    // Get the values entered by the user
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPasswordInput.value;

    // Validation
    if (!emailValue || !passwordValue || !confirmPasswordValue) {
      alert("Please fill in all fields.");
    } else if (passwordValue !== confirmPasswordValue) {
      alert("Passwords do not match.");
    } else {
      // Redirect to LoginPage.html after successful validation
      window.location.href = "LoginPage.html";
    }
  });
