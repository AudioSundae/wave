import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCwmdmI3DVrOD-Tdromu8N-J-gXWqvcBe4",
  authDomain: "wave-ddf6e.firebaseapp.com",
  databaseURL: "https://wave-ddf6e.firebaseio.com",
  projectId: "wave-ddf6e",
  storageBucket: "wave-ddf6e.appspot.com",
  messagingSenderId: "795253427550",
  appId: "1:795253427550:web:c14cace5e27dd504"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
