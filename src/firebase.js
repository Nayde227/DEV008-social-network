import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBCKCACUtV4KUQBasLm6x0eJnurCNedrIE',
  authDomain: 'go--travel.firebaseapp.com',
  projectId: 'go--travel',
  storageBucket: 'go--travel.appspot.com',
  messagingSenderId: '184448048406',
  appId: '1:184448048406:web:c6b768f06e5478f1330437',
  measurementId: 'G-169WWZZ1Z5',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
/*const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
*/

export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// const db = getFirestore(firebaseApp);

// detect auth state
/* onAuthStateChanged(auth, user => {
    if (user ≠ null) {
    consolelog('logged in!');
} else {
    console.log('No user');
}
});
*/
