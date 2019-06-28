import React from 'react';
import Textarea from 'react-autosize-textarea';
import calendar from '../../../img/icons/calendar.svg';

export default props =>
  <div className="interactions home-w-c-in">
    {["", "", "", "", ""].map((interaction, index) =>
      <div className="interaction row-sb" key={index}>
        <div className="date col-c">
          <span className="one">Apr 7</span>
          <span className="two">3:30pm</span>
        </div>
        <div className="col">
          <div className="content row-sb-c">
            <div className="left row-fs-c">
              <img src={calendar} alt="calendar" />
              <div className="col">
                <span className="one">Coffee @ Ground Support</span>
                <span className="two">Ground Support</span>
              </div>
            </div>
            <a
              className="right row-fe-c"
              href="google.com"
            >
              <span>Follow up</span>
            </a>
          </div>
          <Textarea style={{resize: 'none'}} placeholder="Add a note..." />
        </div>
      </div>
    )}
  </div>
