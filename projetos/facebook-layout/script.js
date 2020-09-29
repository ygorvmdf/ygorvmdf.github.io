const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function () {
  const emailInput = document.getElementById('email-input').value;
  alert(emailInput);
});

const enrrolmentButton = document.getElementById('facebook-register');

enrrolmentButton.addEventListener('click', function (event) {
  event.preventDefault();
  const inputList = document.querySelectorAll('.signup-form input');
  for (let index = 0; index < inputList.length; index += 1) {
    if (inputList[index].value === '') {
      document.getElementById('hidden-input').classList.remove('hidden-input');
      return;
    }
  }
});

document.getElementById('custom-radio').addEventListener('click', () => {
  document.getElementById('custom-options').classList.remove('hidden-input');
});

document.getElementById('male-radio').addEventListener('click', () => {
  document.getElementById('custom-options').classList.add('hidden-input');
});

document.getElementById('female-radio').addEventListener('click', () => {
  document.getElementById('custom-options').classList.add('hidden-input');
});
