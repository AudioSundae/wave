import React from 'react';
import Home from './components/Home';
import Landing from './components/Landing';
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
      data: null,
      app: "landingf"
    }
  }
  switchPage = page => this.setState({page})
  render() {
    let { page, app } = this.state
        // { user } = this.props;

    if (app === "landing") {
      return <Landing />
    } else {
      return(
        <div className="app row-sb-c">
          {/*
            <Header page={page} onSwitchPage={this.switchPage} />
          */}
          {
            page === "home"
              ? <Home {...this.props} page={page} onSwitchPage={this.switchPage} />
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
}

export default withFirebase(App);
