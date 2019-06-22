import firebase from './firebase';
import React from 'react';
import Spinner from '../Widgets/spinner.js'

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
provider.addScope('https://www.googleapis.com/auth/gmail.readonly')




const withFirebase = Component => {
  class WithFirebase extends React.Component {
    state = { user: false }
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://apis.google.com/js/api.js';
        script.onload = () => {
          window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
               apiKey: "AIzaSyCwmdmI3DVrOD-Tdromu8N-J-gXWqvcBe4",
               clientId: "795253427550-e7lvvtbellcidlur1p2kjvesle8tt7vl.apps.googleusercontent.com",
               discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
               scope: "https://www.googleapis.com/auth/gmail.readonly",
            })
            .then(() => {
              var googleUser = window.gapi.auth2.getAuthInstance().currentUser.get()
              var isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get()
              if (isSignedIn) {
                 // get the credentials from the google auth response
                 var idToken = googleUser.getAuthResponse().id_token;
                 var creds = firebase.auth.GoogleAuthProvider.credential(idToken);
                 // auth in the user
                 firebase.auth().signInWithCredential(creds).then((user) => {
                    // you can use (user) or googleProfile to setup the user
                    var googleProfile = googleUser.getBasicProfile()
                    console.log(1, user)
                    console.log(2, googleUser)
                    if (user) {
                      // return this.setState({
                      //   user: result.user,
                      //   token: result.credential.accessToken
                      // })
                    } else {
                      firebase.auth().signOut().then(() => firebase.auth().signInWithRedirect(provider))
                    }
                 })
              }
            })
          })
        }
        // bind this to your single page app...
        document.getElementsByTagName('head')[0].appendChild(script);
      })
    }
    render() {
      let { user, token } = this.state;
      return user
        ? <Component user={user} token={token} />
        : <div className="app col-c-c"><Spinner /></div>
    }
  }
  return WithFirebase;
}
export default withFirebase;



//         apiKey: firebase.config.apiKey,
//         clientId: firebase.config.clientID,
//         discoveryDocs: firebase.config.discoveryDocs,
//         scope: firebase.config.scopes.join(' '),
