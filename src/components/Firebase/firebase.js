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
  appId: "1:795253427550:web:c14cace5e27dd504",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v3/rest"],
  clientId: '795253427550-e7lvvtbellcidlur1p2kjvesle8tt7vl.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/gmail.readonly'
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
let auth = firebase.auth()

firebase.doSignOut = () => auth.signOut().then(function() {console.log("sign out success")}).catch(function(error) {console.log("sign out error")})

export default firebase;
export {config}
