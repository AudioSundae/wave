import firebase from './firebase';
let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/gmail.readonly')
export default provider;
