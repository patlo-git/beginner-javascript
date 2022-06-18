const west = document.querySelector('.wes');

west.addEventListener('click', function (event) {
  const shouldChangePage = confirm(
    'This website might be malicious!, do you wish to proceed?'
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
  console.log(shouldChangePage);
});

// to select by name you use an attribute selector, same as css
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function (event) {
  // easy way to grab elements inside of a form
  // this is one reason to set proper semantic name values
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro');
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// OTHER EVENTS WITH FORM INPUTS
/*
keyup
keydown
focus
blur
*/
