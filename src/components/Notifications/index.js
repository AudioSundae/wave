import React from 'react';
import Header from '../Header';
import firebase from '../Firebase/firebase';

export default class extends React.Component {
  render() {
    return(
      <div className="notifications-module col">
        <Header />
        <button onClick={() => firebase.doSignOut()}>sign out</button>
      </div>
    )
  }
}
