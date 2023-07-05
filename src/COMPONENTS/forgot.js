export const forgot = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const buttonBack = document.createElement('button');
  buttonBack.classList.add('buttonBack');

  const forgotYourPassword = document.createElement('h3');
  forgotYourPassword.textContent = 'Forgot your password?';
  forgotYourPassword.classList.add('forgotYourPassword');

  buttonBack.textContent = '< Back';
  buttonBack.addEventListener('click', () => onNavigate('/'));
  homeDiv.appendChild(buttonBack);

  const writeEmail = document.createElement('p');
  writeEmail.textContent = 'Write your email';
  writeEmail.classList.add('textForgot');
  const emailforgot = document.createElement('Email');
  const inputEmmail = document.createElement('input');
  inputEmmail.classList.add('inputForgot');

  const writePassword = document.createElement('p');
  writePassword.textContent = 'Write new password';
  writePassword.classList.add('textForgot');
  const inputNewPassword = document.createElement('input');
  inputNewPassword.type='password';
  inputNewPassword.classList.add('inputForgot');

  const confirmPassword = document.createElement('p');
  confirmPassword.textContent = 'Confirm your new password';
  confirmPassword.classList.add('textForgot');
  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.type='password';
  inputConfirmPassword.classList.add('inputForgot');

  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logoForgot');

  const buttonSave = document.createElement('button');
  buttonSave.textContent = 'Save';
  buttonSave.classList.add('buttonSave');
  buttonSave.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(logo);
  homeDiv.appendChild(forgotYourPassword);
  homeDiv.appendChild(writeEmail);
  homeDiv.appendChild(emailforgot);
  homeDiv.appendChild(inputEmmail);
  homeDiv.appendChild(writePassword);
  homeDiv.appendChild(inputNewPassword);
  homeDiv.appendChild(confirmPassword);
  homeDiv.appendChild(inputConfirmPassword);
  homeDiv.appendChild(buttonSave);

  return homeDiv;
};
