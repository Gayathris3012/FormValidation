document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form elements
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#pwd");

    // Get the values entered by the user
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    // Validation
    if (!emailValue || !passwordValue) {
      alert("Please fill in all fields.");
    } else {
      window.location.href = "TodoList.html";
    }
  });
