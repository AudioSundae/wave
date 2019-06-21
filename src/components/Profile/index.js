import React from 'react';
import Header from '../Header';
// import firebase from '../Firebase';
export default class extends React.Component {
  render() {
    return(
      <div className="notifications-module col-fs-c">
        <Header />
        <img src={`${this.props.user.photoURL}`} alt="profile" style={{height: 100, width: 100}} />
      </div>
    )
  }
}
