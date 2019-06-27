import React from 'react';
import Spinner from '../Widgets/spinner.js'

import firebase from './firebase';
import initializeGoogleAPI from '../GoogleAPI';
import updateAuthStatus from '../GoogleAPI/updateAuthStatus';

const withFirebase = Component => {
  class WithFirebase extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        user: false,
      }
      this.initializeGoogleAPI = initializeGoogleAPI.bind(this)
      this.updateAuthStatus = updateAuthStatus.bind(this)
    }
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({
            user
          })
        } else {
          firebase.auth().signOut()
          this.initializeGoogleAPI().then(() => {
            this.updateAuthStatus().then(() => {
            })
      		})
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
