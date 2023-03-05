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

/* Scroll In Animation */

const items = document.querySelectorAll('.section div a img');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);


/* Empty email field */
const button = document.querySelector('#btn-sub')
const field = document.querySelector('#email-field')

button.addEventListener('click', () => {
  field.value = "";
  window.location.reload();
})
