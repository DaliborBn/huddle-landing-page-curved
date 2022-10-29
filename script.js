function validationEmail() {
  var emailField = document.getElementById('email-field');
  var emailError = document.getElementById('email-error');
  
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      emailError.innerHTML = 'Please check your email!';
      emailField.style.borderBottom = '2px solid red';
      return false;
    } else {
      emailError.innerHTML = '';
      emailField.style.borderBottom = '2px solid green';
      return true;
    }
  }