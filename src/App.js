import React from 'react';
import Home from './components/Home';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

import withFirebase from './components/Firebase';
import './sass/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "notifications",
      data: null
    }
  }
  switchPage = page => this.setState({page})
  render() {
    let { page } = this.state
        // { user } = this.props;
    return(
      <div className="app col-fs-c">
        {
          page === "home"
            ? <Home {...this.props} />
          : page === "notifications"
            ? <Notifications {...this.props} />
          : page === "profile"
            ? <Profile {...this.props} />
          : <div className="flex" />
        }
        <span>{this.state.data}</span>
        <Navbar page={page} onSwitchPage={this.switchPage} />
      </div>
    )
  }
}

export default withFirebase(App);
