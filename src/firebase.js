import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

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

export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export const saveForm = (titles, descriptions, autor) => addDoc(collection(db, 'travel-post'), {
  titles, descriptions, autor, likes: [],
});

export const getForm = () => getDocs(collection(db, 'travel-post'));

export const onGetPost = (callback) => onSnapshot(collection(db, 'travel-post'), callback);

export const deletePost = (id) => deleteDoc(doc(db, 'travel-post', id));

export const editPost = (id) => getDoc(doc(db, 'travel-post', id));

export const updatePost = (id, newFields) => updateDoc(doc(db, 'travel-post', id), newFields);
