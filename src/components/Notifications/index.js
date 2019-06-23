import React from 'react';
// import Header from '../Header';
import firebase from '../Firebase/firebase';

export default class extends React.Component {
  componentDidMount() {
    window.gapi.client.load("gmail", "v1", () => console.log("gmail loaded"))
  }
  render() {
    return(
      <div className="notifications-module col-c-c">
        <span>{(!!this.props.user).toString()}</span>
        <button onClick={() => firebase.doSignOut()}>sign out</button>
      </div>
    )
  }
}
