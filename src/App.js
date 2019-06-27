import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import MobileNav from './components/MobileNav';
import withFirebase from './components/Firebase';
import './sass/main.scss';
require("typeface-nunito-sans")

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "home",
      data: null
    }
  }
  switchPage = page => this.setState({page})
  render() {
    let { page } = this.state
        // { user } = this.props;
    return(
      <div className="app col-fs-c">
        <Header page={page} onSwitchPage={this.switchPage} />
        {
          page === "home"
            ? <Home {...this.props} />
          : page === "notifications"
            ? <Notifications {...this.props} />
          : page === "profile"
            ? <Profile {...this.props} />
          : page === "add"
            ? <Profile {...this.props} />
          : <div className="flex" />
        }
        <MobileNav
          {...this.props}
          page={page}
          onSwitchPage={this.switchPage}
        />
      </div>
    )
  }
}

export default withFirebase(App);
