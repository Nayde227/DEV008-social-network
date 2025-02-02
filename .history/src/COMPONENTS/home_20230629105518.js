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

  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(inputContraseña);

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  return homeDiv;

  /*const container = document.querySelector('#container');
  
  const divInput = document.createElement('div');
  divInput.innerHTML= <input type="text" name="name[]" placeholder="Name"required></input>
  container.appendChild(divInput);
*/
};
