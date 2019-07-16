import firebase from '../Firebase/firebase';
import provider from '../Firebase/provider';
let gapi = window.gapi;

async function login() {
  let lStorToken = window.localStorage.getItem('r_tok') || false;
  if (lStorToken) {
    let cred = provider.credential(lStorToken)
    await firebase.auth().signInWithCredential(cred);
  } else {
    let googleAuth = gapi.auth2.getAuthInstance(),
        googleUser = await googleAuth.signIn(),
        token = googleUser.getAuthResponse().id_token,
        credential = provider.credential(token);
    await firebase.auth().signInWithCredential(credential);
    window.localStorage.setItem('r_tok', token);
  }
}

function updateAuthStatus() {
  return new Promise((resolve) => {
    if (!gapi.auth2.getAuthInstance()) {
			this.setState({authenticated: false})
			resolve(false)
		}
    login().then(user => {
      this.setState({authenticated: user || false})
      user ? resolve() : resolve(false)
    })
  });
}
export default updateAuthStatus;
