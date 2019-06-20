import { provider, firebase } from './index';
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
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => this.setState({user: user ? user : false}))
    }
    render() {
      let { user, token } = this.state;
      if (!user || !token) {
        firebase.auth().signInWithRedirect(provider).then(result => this.setState({token: result.credential.accessToken, user: result.user}))
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
      } else {
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
