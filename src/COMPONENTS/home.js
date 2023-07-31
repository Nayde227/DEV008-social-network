import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { loginUser } from '../firebase';

export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  const buttonLogin = document.createElement('button');
  buttonLogin.classList.add('buttonLog');

  const buttonRegister = document.createElement('button');
  buttonRegister.classList.add('buttonReg');

  const buttonForgot = document.createElement('button');
  buttonForgot.classList.add('buttonFor');

  buttonRegister.textContent = 'Sign Up';
  buttonLogin.textContent = 'Sign In';
  buttonForgot.textContent = 'Forgot password?';

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('inputHome');
  inputEmail.type = 'email';
  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputHome');
  inputPassword.type = 'password';

  const email = document.createTextNode('E-mail');
  const password = document.createTextNode('Password');
  const logo = document.createElement('img');
  logo.src = '../logo.png';
  logo.classList.add('logo');

  buttonLogin.addEventListener('click', () => {
    if (!inputEmail.value || !inputPassword.value) {
      alert('Complete all fields correctly');
    } else {
      loginUser(inputEmail.value, inputPassword.value)
        .then((result) => {
          const user = result.user;
          localStorage.setItem('user', JSON.stringify(user));
          onNavigate('/login');
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/wrong-password') {
            alert('wrong password');
          }
          if (errorCode === 'auth/invalid-email') {
            alert('invalid email');
          }
          if (errorCode === 'auth/invalid-hash-derived-key-length') {
            alert('invalid key length');
          }
          if (errorCode === 'auth/user-not-found') {
            alert('user not found');
          }
        });
    }
  });

  const provider = new GoogleAuthProvider();

  const accessGoogle = document.createElement('button');
  accessGoogle.textContent = 'Sign In with Google';
  accessGoogle.classList.add('accessGoogle');

  const auth = getAuth();
  accessGoogle.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem('user', JSON.stringify(user));

        onNavigate('/login');
      })
      .catch(() => {
      });
  });
  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonForgot.addEventListener('click', () => onNavigate('/forgot'));

  homeDiv.appendChild(logo);
  homeDiv.appendChild(email);
  homeDiv.appendChild(inputEmail);
  homeDiv.appendChild(password);
  homeDiv.appendChild(inputPassword);
  homeDiv.appendChild(buttonLogin);
  homeDiv.appendChild(accessGoogle);
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonForgot);

  return homeDiv;
};
