import React from 'react';
import Textarea from 'react-autosize-textarea';
import calendar from '../../../img/icons/calendar.svg';

export default props =>
  <div className="interactions home-w-c-in">
    <h3>interactions</h3>
    {props.interactions.map((interaction, index) =>
      <div className="interaction row-sb" key={index}>
        <div className="date col-c">
          <span className="one">{interaction.date || ""}</span>
          <span className="two">{interaction.time || ""}</span>
        </div>
        <div className="col flex">
          <div className="content row-sb-c">
            <div className="col">
              <span className="one">{interaction.title || "No title found"}</span>
              <span className="two">{interaction.location || "No location found"}</span>
            </div>
            <a
              className="right row-fe-c"
              href={interaction.followUpLink || "#"}
            >
              <span>Follow up ➔</span>
            </a>
          </div>
          <Textarea style={{resize: 'none'}} defaultValue={interaction.note || ""} placeholder="Add a note..." />
        </div>
        {
          index === props.interactions.length
            ? <div />
            : <div className="line" />
        }
      </div>
    )}
  </div>
