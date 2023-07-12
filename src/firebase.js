import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getFirestore} from 'firebase/firestore';
import { getDocs, getFirestore } from "firebase/firestore";
import { doc, getDoc, collection, addDoc } from "firebase/firestore";

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
const db = getFirestore(app);

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

export const saveForm = (titles, descriptions) => {
addDoc(collection(db,'travel-post'), {
  titles, descriptions
})
  
};

export const getForm = () => getDocs(collection(db,'travel-post'));






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
/*export function saveData(email, text){
  return addDoc(collection(db, "travel-post"), {
    email,
    text
  });
 
  
};

*/
/*export function getData() {
  
const docRef = doc(db, 'travel-post');
getDoc(docRef).then((docSnap)=>{
  console.log("Document data:", docSnap.data());
});

/*if (docSnap.exists()) {

} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}


return doc();

};
*/