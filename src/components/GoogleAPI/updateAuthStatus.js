import firebase from '../Firebase/firebase';
import provider from '../Firebase/provider';
let gapi = window.gapi;

async function login() {
  let googleAuth = gapi.auth2.getAuthInstance(),
        googleUser = await googleAuth.signIn(),
        token = googleUser.getAuthResponse().id_token,
        credential = provider.credential(token);
  await firebase.auth().signInWithCredential(credential);
}

function updateAuthStatus() {
  return new Promise((resolve) => {
    if (!gapi.auth2.getAuthInstance()) {
			this.setState({authenticated: false})
			resolve(false)
		}
    login().then(() => {
      let googleUser = gapi.auth2.getAuthInstance().currentUser.get(),
          isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get(),
          googleToken = googleUser.getAuthResponse().id_token;
      if (isSignedIn) {
        var credential = firebase.auth.GoogleAuthProvider.credential(googleToken);
        firebase.auth().signInWithCredential(credential).then(user => {
          var hasUser = Boolean(user !== null)
          if (hasUser) {
            // fix this!
            this.setState({
              authenticated: hasUser,
              token: googleToken
            })
            resolve()
          } else {
            this.setState({authenticated: false})
            resolve(false)
          }
        })
      }
    })
  });
}
export default updateAuthStatus;
