import { registerUser } from '../firebase';

export const register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const buttonBack = document.createElement('button');
  buttonBack.classList.add('buttonBack');

  /* homeDiv.textContent = 'Register Here' */
  const registerHere = document.createElement('h3');
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
  const inputPassword = document.createElement('input'); // type pasword checar que no se convierta en **
  inputPassword.classList.add('inputRegister');

  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logoRegister');

  const buttonSingUp = document.createElement('button');
  buttonSingUp.textContent = 'Register';
  buttonSingUp.classList.add('buttonSingUp');
  buttonSingUp.addEventListener('click', () => {
  
        if(!inputEmail.value || !inputPassword.value || !inputUser.value || !inputName.value){
          alert('Complete all fields correctly')
        }else{registerUser(inputEmail.value, inputPassword.value)
       
          .then(() => {
            console.log('correctoprueba');
            onNavigate('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            
          });}
    
    // console.log("errorprueba");
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
