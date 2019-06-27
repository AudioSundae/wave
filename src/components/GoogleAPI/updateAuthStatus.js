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
      var googleUser = gapi.auth2.getAuthInstance().currentUser.get()
      var isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get()
      if (isSignedIn) {
        var credential = firebase.auth.GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
        firebase.auth().signInWithCredential(credential).then((user) => {
          var hasUser = Boolean(user !== null)
          if (hasUser) {
            // fix this!
            this.setState({
              user: "user!",
              authenticated: hasUser
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
