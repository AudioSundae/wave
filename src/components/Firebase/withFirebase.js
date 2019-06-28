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
      firebase.auth().signOut()
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.setState({user}, () => {
            window.gapi.client.calendar.events.list({
              calendarId: "primary",
              maxResults: 100,
          }).then(response => {
              let allAttendees = response.result.items.map(evt => evt.attendees ? evt.attendees.filter(at => at.email !== "matthew.kochakian@gmail.com") : []),
                  filteredAttendees = [];
              allAttendees.map(attendee => attendee.map(at => filteredAttendees.push(at)))
              console.log(filteredAttendees.map(a => a.email))
              // response.result.items
              //   .map(evt => evt.attendees.filter(attendee => attendee.email !== "matthew.kochakian@gmail.com"))
              //   .map(evt => evt.map(attendee => console.log(attendee.email)))
            })
          })
        } else {
          firebase.auth().signOut()
          this.initializeGoogleAPI().then(() => this.updateAuthStatus())
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
