import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdIRFIEzbwA5oJjLjI62S_q3fgfgAKWtw",
    appId: "1:560157128517:web:4de7dc5d2b1ce6b2d6f02c"
  };
export default firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();