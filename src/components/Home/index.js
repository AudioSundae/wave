import React from 'react';
import Header from '../Header';
import person from '../../img/icons/person.svg';
const cn = require('classnames')
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // activeList: 0,
      activeContact: 0
    }
  }
  setActiveContact = activeContact => this.setState({activeContact})
  render() {
    let {
          activeContact,
          // activeList
        } = this.state;
    return(
      <div className="home-module col">
        <Header />
        <div className="home-list">
          {["", "", "", "", "", "", "", "", ""].map((contact, index) =>
            <div
              className={cn(["row-fs-c", {"active": activeContact === index}])}
              onClick={() => this.setActiveContact(index)}
              key={index}
            >
              <img src={person} alt="person" />
              <div className="col">
                <p>[Firstname] [Lastname]</p>
                <span>firstname@lastname.com</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
