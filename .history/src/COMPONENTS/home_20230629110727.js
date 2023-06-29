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
  const inputPassword = document.createElement('input');
  const email = document.createTextNode('E-mail');
  const password = document.createTextNode('Password');
  const logo = document.createElement('img');
  
  homeDiv.appendChild(logo);
  homeDiv.appendChild(email);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  return homeDiv;
};
