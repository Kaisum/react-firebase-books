import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBOcCQOGsdcS48B1ZyUHAI-IZMo2qvfYnM',
  authDomain: 'books-166de.firebaseapp.com',
  databaseURL: 'https://books-166de.firebaseio.com',
  projectId: 'books-166de',
  storageBucket: 'books-166de.appspot.com',
  messagingSenderId: '693151837283'
};
firebase.initializeApp(config);

export default firebase;
