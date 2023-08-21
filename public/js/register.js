const form = document.querySelector("form"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

// Email Validtion
function addShakeClass(field) {
  field.classList.add("shake");
  setTimeout(() => {
    field.classList.remove("shake");
  }, 500); // 500 milliseconds delay before removing the class
}

function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    emailField.classList.add("invalid");
    addShakeClass(emailField); // Add "shake" class with delay
    return false;
  }
  emailField.classList.remove("invalid");
  return true;
}

function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    passField.classList.add("invalid");
    addShakeClass(passField); // Add "shake" class with delay
    return false;
  }
  passField.classList.remove("invalid");
  return true;
}

function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    cPassField.classList.add("invalid");
    addShakeClass(cPassField); // Add "shake" class with delay
    return false;
  }
  cPassField.classList.remove("invalid");
  return true;
}


// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Validate fields
  const isEmailValid = checkEmail();
  const isPassValid = createPass();
  const isCPassValid = confirmPass();

  // If all fields are valid, submit the form
  if (isEmailValid && isPassValid && isCPassValid) {
    form.submit(); // Submit the form
  }


  //calling function on key up
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});