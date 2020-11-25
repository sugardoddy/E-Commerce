import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAy3LQPKWp6zCjlHv9q95yTol75EAnkOTE",
    authDomain: "ecommercefebry.firebaseapp.com",
    databaseURL: "https://ecommercefebry.firebaseio.com",
    projectId: "ecommercefebry",
    storageBucket: "ecommercefebry.appspot.com",
    messagingSenderId: "598670793894",
    appId: "1:598670793894:web:5d2aa609fcb3f14b5a6867",
    measurementId: "G-5GSPF4QZ62"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;