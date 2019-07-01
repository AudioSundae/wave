import React from 'react';
import Top from './components/top';
import Bio from './components/bio';
import Keywords from './components/keywords';
import Interactions from './components/interactions';

let interactions = [
  {
    "date": "Apr 12",
    "time": "3:30pm",
    "title": "Catch up (Matthew + Wayne)",
    "location": "Ground Support, W Broadway, New York, NY",
    "followedUp": false,
    "followUpLink": "mailto:matthew.kochakian@gmail.com",
    "note": ""
  }, {
    "date": "Apr 7",
    "time": "12:00pm",
    "title": "Lunch — Matthew + Wayne",
    "location": "Gotan Tribeca",
    "followedUp": true,
    "followUpLink": "mailto:matthew.kochakian@gmail.com",
    "note": ""
  }, {
    "date": "Apr 2",
    "time": "11:00am",
    "title": "Matthew + Wayne (Lunchclub)",
    "location": "Little Cupcake Bakeshop, Mott Street, New York, NY",
    "followedUp": true,
    "followUpLink": "mailto:matthew.kochakian@gmail.com",
    "note": "Matt is a product designer, software engineer, and recent grad from NYU’s stern school of business. He’s spent the last year as cofounder of a startup called Maisie, affordable and accessible mental health care."
  }
]



export default props => {
  return props.contact
    ? <div className="home-contact home-w-c flex col-fs-c">
        <div className="max">
          <Top {...props} />
          <Bio {...props} />
          <Interactions {...props} interactions={interactions} />
          <Keywords {...props} />
        </div>
      </div>
    : <div />
}
