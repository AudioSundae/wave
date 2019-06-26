import firebase from './firebase';
import provider from './provider';
import React from 'react';
import Spinner from '../Widgets/spinner.js'
let gapi = window.gapi;

const withFirebase = Component => {
  class WithFirebase extends React.Component {
    state = { user: true }
    async login() {
      const googleAuth = gapi.auth2.getAuthInstance(),
            googleUser = await googleAuth.signIn(),
            token = googleUser.getAuthResponse().id_token,
            credential = provider.credential(token);
      await firebase.auth().signInWithCredential(credential);
    }
    componentDidMount() {
      this.setState({hello: true})
      // gapi.load("client:auth2", () => {
      //   console.log('loaded client')
      //   gapi.client.init({
      //     apiKey: "AIzaSyCwmdmI3DVrOD-Tdromu8N-J-gXWqvcBe4",
      //     clientId: "795253427550-e7lvvtbellcidlur1p2kjvesle8tt7vl.apps.googleusercontent.com",
      //     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],
      //     scope: "https://www.googleapis.com/auth/gmail.readonly"
      //   })
      //   // this.login()
      //   .catch(error => console.log(error))
      // })
      // firebase.auth().onAuthStateChanged(user => {
      //   if (user) {
      //     this.setState({
      //       user
      //     })
      //   } else {
      //     firebase.auth().signOut().then(() => this.login())
      //   }
      // })
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
