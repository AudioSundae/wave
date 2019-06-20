import React from 'react';
import withFirebase from './components/Firebase';
import logo from './logo.svg';
import './sass/main.scss';

const App = props => {
  let { user } = props;
  return(
    <div className="col-c-c max app">
      <div style={{
        background: `url(${logo})`,
        backgroundSize: "100px 100px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: 100, width: 100
      }} />
      {user.email}
    </div>
  )
}

export default withFirebase(App);
