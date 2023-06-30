export const home = (onNavigate) => {
  const homeDiv = document.createElement('div'); // Div padre
  homeDiv.classList.add('home');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonLog');

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonReg');
 
  const buttonForgot = document.createElement('button');
  buttonForgot.classList.add('buttonFor');

  buttonRegister.textContent = 'Sing Up';
  buttonLogin.textContent = 'Log in';
  buttonForgot.textContent = 'Forgot password?';

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputHome')
  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputHome')
  const email = document.createTextNode('E-mail');
  const password = document.createTextNode('Password');
  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logo');

  homeDiv.appendChild(logo);
  homeDiv.appendChild(email);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonForgot);

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonForgot.addEventListener('click', () => onNavigate('/forgot'));

  return homeDiv;
};
