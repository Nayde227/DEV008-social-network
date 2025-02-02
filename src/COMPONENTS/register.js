import { registerUser } from '../firebase';

export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const buttonBack = document.createElement('button');
  buttonBack.classList.add('buttonBack');

  const registerHere = document.createElement('p');
  registerHere.textContent = 'Register Here';
  registerHere.classList.add('registerHere');

  buttonBack.textContent = '< Back';
  buttonBack.addEventListener('click', () => onNavigate('/'));

  const userName = document.createTextNode('Username');
  const inputUser = document.createElement('input');
  inputUser.classList.add('inputRegister');

  const name = document.createTextNode('Name');
  const inputName = document.createElement('input');
  inputName.classList.add('inputRegister');

  const email = document.createTextNode('E-mail');
  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputRegister');

  const password = document.createTextNode('Password');
  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.classList.add('inputRegister');

  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logoRegister');

  const buttonSingUp = document.createElement('button');
  buttonSingUp.textContent = 'Register';
  buttonSingUp.classList.add('buttonSingUp');
  buttonSingUp.addEventListener('click', () => {
    if (
      !inputEmail.value || !inputPassword.value || !inputUser.value || !inputName.value
    ) {
      alert('Complete all fields correctly');
    } else {
      registerUser(inputEmail.value, inputPassword.value)
        .then(() => {
          onNavigate('/');
        })
        .catch((error) => {
          const errorCode = error.code;

          if (errorCode === 'auth/email-already-exists') {
            alert('email already exists');
          }
          if (errorCode === 'auth/email-already-in-use') {
            alert('email already in use');
          }
          if (errorCode === 'auth/invalid-email') {
            alert('invalid email');
          }
        });
    }
  });

  homeDiv.appendChild(buttonBack);
  homeDiv.appendChild(logo);
  homeDiv.appendChild(registerHere);
  homeDiv.appendChild(userName);
  homeDiv.appendChild(inputUser);
  homeDiv.appendChild(name);
  homeDiv.appendChild(inputName);
  homeDiv.appendChild(email);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonSingUp);

  return homeDiv;
};
