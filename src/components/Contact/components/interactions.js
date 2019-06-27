import React from 'react';
import calendar from '../../../img/icons/calendar.svg';

export default props =>
  <div className="interactions home-w-c-in">
    <h3>interactions</h3>
    <div className="col">
      <div className="content row-fs-c">
        <img src={calendar} alt="calendar" />
        <div className="col">
          <span className="one">Coffee @ Ground Support</span>
          <span className="two">3/2/19 @ 4pm</span>
        </div>
      </div>
    </div>
  </div>
