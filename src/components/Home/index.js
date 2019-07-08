import React from 'react';
import Contact from '../Contact';
import Contacts from './components/contacts';
import Filters from './components/filters';
import Search from './components/search';

import background from '../../img/mountain.jpg';
const cn = require('classnames')
const data = [{"firstName": "matthew", "lastName": "kochakian"},
  {"firstName": "alvin", "lastName": "yakitori"},
  {"firstName": "jefferson", "lastName": "steelflex"},
  {"firstName": "person", "lastName": "ofinterest"},
  {"firstName": "wayne", "lastName": "tables"},
  {"firstName": "human", "lastName": "fellow"},
  {"firstName": "Sandro", "lastName": "Denver"},
  {"firstName": "alice", "lastName": "salad"},
  {"firstName": "gerry", "lastName": "mandering"},
  {"firstName": "chuckles", "lastName": "felix"},
  {"firstName": "fiscal", "lastName": "tostada"},
  {"firstName": "Harbinger", "lastName": "Ascot"},
  {"firstName": "Coolidge", "lastName": "Lasts"},
  {"firstName": "Kiwi", "lastName": "Figurine"},
]
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
      <div className="home-module s-home flex row-c">
        <div className={cn(["left", "home-w-l", "col", {"contact_active": activeContact !== "none"}])}>
          <Search />
          <Filters />
          <div className="fade" />
          <Contacts contacts={data} onClick={this.setActiveContact} activeContact={activeContact} />
        </div>
        <div className={cn([
          "right",
          "home-w-r",
          "flex",
          {
            "active": activeContact !== "none"
          }
        ])}>
          <Contact contact={data[activeContact]} onClose={this.setActiveContact} />
        </div>
        <img src={background} alt="mountain" />
      </div>
    )
  }
}
