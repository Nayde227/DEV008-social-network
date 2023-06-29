export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const buttonBack = document.createElement('button');
  homeDiv.classList.add('buttonBack');

  homeDiv.textContent = 'Register Here';

  buttonBack.textContent = '< Back';
  buttonBack.addEventListener('click', () => onNavigate('/'));
  homeDiv.appendChild(buttonBack);

  const inputUser = document.createElement('input');
  const userName = document.createTextNode('Username');
  const inputName = document.createElement('input');
  const name = document.createTextNode('Name');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const email = document.createTextNode('E-mail');
  const password = document.createTextNode('Password');

  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logo');

  const buttonSingUp = document.createElement('button');
  buttonSingUp.textContent = 'Register';
  buttonSingUp.classList.add('buttonSingUp');

  const terminos = document.createTextNode('By continuing, youagree to GO! Travel Terms of Service and Privacy Policy');

  homeDiv.appendChild(logo);
  homeDiv.appendChild(inputUser);
  homeDiv.appendChild(userName);
  homeDiv.appendChild(inputName);
  homeDiv.appendChild(name);
  homeDiv.appendChild(email);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonSingUp);
  homeDiv.appendChild(terminos);

  return homeDiv;
};
