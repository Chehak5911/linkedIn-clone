import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDpy7r5Uzg5tAZV5Grnn3FivSrqcYBv7gs",
    authDomain: "linkedin-clone-3f206.firebaseapp.com",
    projectId: "linkedin-clone-3f206",
    storageBucket: "linkedin-clone-3f206.appspot.com",
    messagingSenderId: "564651053076",
    appId: "1:564651053076:web:5119a0e51ddbe4ced9d701"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage }; 
  export default db;