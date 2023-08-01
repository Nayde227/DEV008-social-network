export const home = (onNavigate) => {
  const homeDiv = document.createElement('div'); // Div padre
  homeDiv.classList.add('buttonHome');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonLog');

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonReg');

  buttonRegister.textContent = 'Sing Up';
  buttonLogin.textContent = 'Log in';

  const inputEmail = document.createElement('input');
  const inputContraseña = document.createElement('input');
  const email = document.createTextNode('E-mail');
  const password = document.createTextNode('Password');
  
  homeDiv.appendChild(email);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(inputContraseña);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  return homeDiv;
};
