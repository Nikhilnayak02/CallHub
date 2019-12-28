//Sign-up
const signUpForm = document.getElementById('signUpForm');
const emailField = document.getElementById('emailField');
const okButton1 = document.getElementById('okButton1');
  
emailField.addEventListener('keyup', function () {
  isValidEmail = emailField.checkValidity();
  
  if ( isValidEmail ) {
    okButton1.disabled = false;
  } else {
    okButton1.disabled = true;
  }
});
  
okButton1.addEventListener('click', function () {
  signUpForm.submit();
});

//Sign-In
const signInForm = document.getElementById('signInForm');
const emailField = document.getElementById('emailField');
const okButton2 = document.getElementById('okButton2');
  
emailField.addEventListener('keyup', function () {
  isValidEmail = emailField.checkValidity();
  
  if ( isValidEmail ) {
    okButton2.disabled = false;
  } else {
    okButton2.disabled = true;
  }
});
  
okButton2.addEventListener('click', function () {
  signInForm.submit();
});
