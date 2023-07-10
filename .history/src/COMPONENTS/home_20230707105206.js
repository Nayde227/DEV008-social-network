import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { loginUser } from '../firebase';

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

  const imgTravel = document.createElement('img');
  imgTravel.src = './viaje2.jpg';
  imgTravel.classList.add('imgTravel')

  buttonLogin.addEventListener('click', () => {
    if (!inputEmail.value || !inputPassword.value) {
      // eslint-disable-next-line no-alert
      alert('Complete all fields correctly');
    } else {
      loginUser(inputEmail.value, inputPassword.value)
        .then((e) => onNavigate('/login'))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            // eslint-disable-next-line no-alert
            alert('wrong password');
          }
          if (errorCode === 'auth/invalid-email') {
            // eslint-disable-next-line no-alert
            alert('invalid email');
          }
          if (errorCode === 'auth/invalid-hash-derived-key-length') {
            // eslint-disable-next-line no-alert
            alert('invalid key length');
          }

          if (errorCode === 'auth/user-not-found') {
            // eslint-disable-next-line no-alert
            alert('user not found');
          }
          console.log(errorCode);
          console.log(errorMessage);
          console.log(error);
        });
    }
  });

  const provider = new GoogleAuthProvider();

  const accessGoogle = document.createElement('button');
  accessGoogle.textContent = 'Sing In with Google';
  accessGoogle.classList.add('accessGoogle');

  const auth = getAuth();
  accessGoogle.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        onNavigate('/login');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(accessGoogle);
  homeDiv.appendChild(buttonForgot);

  return homeDiv;
};
