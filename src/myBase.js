import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdIRFIEzbwA5oJjLjI62S_q3fgfgAKWtw",
    authDomain: "nwitter-2fb14.firebaseapp.com",
    projectId: "nwitter-2fb14",
    storageBucket: "nwitter-2fb14.appspot.com",
    messagingSenderId: "560157128517",
    appId: "1:560157128517:web:4de7dc5d2b1ce6b2d6f02c",
    measurementId: "G-3K2RT1XCZ0"
  };
export default firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();