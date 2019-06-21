import { provider, firebase } from './index';
import React from 'react';
import Spinner from '../Widgets/spinner.js'

const withFirebase = Component => {
  class WithFirebase extends React.Component {
    state = { user: false }
    componentDidMount() {
      this.setState({hello: true})
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          window.gapi.load("client:auth2", () => window.gapi.client.init({
              discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v3/rest"],
              clientId: '795253427550-e7lvvtbellcidlur1p2kjvesle8tt7vl.apps.googleusercontent.com',
              scope: 'https://www.googleapis.com/auth/gmail.readonly'
            }).then(() => {
              return window.gapi.auth2.getAuthInstance().isSignedIn.get().then(x => console.log(x))
            })
          )
          return this.setState({user})
        } else {
          return this.setState({user: false},
            () => firebase.auth().signOut().then(() => firebase.auth().signInWithRedirect(provider))
          )
        }
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
