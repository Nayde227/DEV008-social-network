import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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


export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginUser (email, password){
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
