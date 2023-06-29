import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
//import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBCKCACUtV4KUQBasLm6x0eJnurCNedrIE",
    authDomain: "go--travel.firebaseapp.com",
    projectId: "go--travel",
    storageBucket: "go--travel.appspot.com",
    messagingSenderId: "184448048406",
    appId: "1:184448048406:web:c6b768f06e5478f1330437",
    measurementId: "G-169WWZZ1Z5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(firebaseApp);
//const db = getFirestore(firebaseApp);

//detect auth state
/*onAuthStateChanged(auth, user => {
    if (user ≠ null) {
    consolelog('logged in!');
} else {
    console.log('No user');
}
});
*/


