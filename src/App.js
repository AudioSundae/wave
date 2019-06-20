import React from 'react';
import Home from './components/Structure';
import Header from './components/Header';
import Navbar from './components/Navbar';

import withFirebase from './components/Firebase';
import logo from './logo.svg';
import './sass/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "home"
    }
  }
  switchPage = page => this.setState({page})
  render() {
    let { user } = this.props,
        { page } = this.state;
    return(
      <div className="app col-fs-c">
        <Header page={page} />
        <Home>

        </Home>
        <Navbar page={page} onSwitchPage={this.switchPage} />
      </div>
    )
  }
}

export default withFirebase(App);
