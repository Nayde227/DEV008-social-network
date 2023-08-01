export const forgot = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const buttonBack = document.createElement('button');
  homeDiv.classList.add('buttonBack');

  homeDiv.textContent = 'Forgot your password?';

  buttonBack.textContent = '< Back';
  buttonBack.addEventListener('click', () => onNavigate('/'));
  homeDiv.appendChild(buttonBack);

  const textForgot = document.createTextNode('Forgot Password?');
  const writeEmail = document.createTextNode('Please write yor email address');
  const emailforgot = document.createElement('Email');
  const inputEmmail = document.createElement('input');

  
  const writePassword = document.createTextNode('Write new password');
  const newPassword = document.createTextNode('New Password');
  const inputNewPassword = document.createElement('input');

  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logo');

  const buttonSave = document.createElement('button');
  buttonSave.textContent = 'Save';
  buttonSave.classList.add('buttonSave');

  homeDiv.appendChild(logo);
  homeDiv.appendChild(textForgot);
  homeDiv.appendChild(writeEmail);
  homeDiv.appendChild(emailforgot);
  homeDiv.appendChild(inputEmmail);
  homeDiv.appendChild(writePassword);
  homeDiv.appendChild(newPassword);
  homeDiv.appendChild(inputNewPassword);
  homeDiv.appendChild(buttonSave);


  return homeDiv;
};
