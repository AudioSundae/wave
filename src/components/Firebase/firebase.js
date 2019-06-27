import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v3/rest"],
  clientId: process.env.REACT_APP_CLIENT_ID,
  scope: 'https://www.googleapis.com/auth/gmail.readonly'
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
let auth = firebase.auth()

firebase.doSignOut = () => auth.signOut().then(function() {console.log("sign out success")}).catch(function(error) {console.log("sign out error")})

export default firebase;
export {config}
