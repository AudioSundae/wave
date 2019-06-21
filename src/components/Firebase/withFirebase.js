import { provider, firebase } from './index';
import gapi from 'gapi-client';
import React from 'react';

 const withFirebase = Component => {
  class WithFirebase extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user: {},
        token: {},
      }
    }
    // Initialize the API client library
    // initClient() {
    //   gapi.client.init({
    //     discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v3/rest"],
    //     clientId: '795253427550-e7lvvtbellcidlur1p2kjvesle8tt7vl.apps.googleusercontent.com',
    //     scope: 'https://www.googleapis.com/auth/gmail.readonly'
    //   })
    // }
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => this.setState({user: user ? user : false}))

      // firebase.auth().onAuthStateChanged(user => {
      //   if (user) {
      //     console.log("there is a user")
      //     // gapi.load('client:auth2', this.initClient)
      //     // .then(user => {
      //     //   firebase.auth().currentUser.getToken().then(t => console.log(t))
      //     //   // return console.log("it worked")
      //     // })
      //   } else {
      //     this.setState({user: false})
      //     firebase.auth().signOut()
      //   }
      // })
    }
    render() {
      let { user, token } = this.state;
      if (!user || !token) {
        firebase.auth().signInWithRedirect(provider)
          .then(result => this.setState({token: result.credential.accessToken, user: result.user}))
          .catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
          });
          return <div />
      } else {
        console.log(user)
        return(
          <Component
            user={user}
            token={token}
          />
        )
      }
    }
  }
  return WithFirebase;
}
export default withFirebase;
