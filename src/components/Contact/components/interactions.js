import React from 'react';
import Textarea from 'react-autosize-textarea';

export default props =>
  <div className="interactions home-w-c-in">
    <div className="title row-sb-c">
    <h3>interactions</h3>
    <div />
    </div>
    {props.interactions.map((interaction, index) =>
      <div className="interaction col" key={index}>
        <div className="row-sb">
          <div className="info col flex">
            <span className="one">{interaction.title || "No title found"}</span>
            <span className="two">{interaction.location || "No location found"}</span>
          </div>
          <div className="date col-fs-fe">
            <span className="one">{interaction.date || ""}</span>
            <span className="two">{interaction.time || ""}</span>
          </div>
          {
            index === props.interactions.length
              ? <div />
              : <div className="line" />
          }
        </div>
        <Textarea style={{resize: 'none'}} defaultValue={interaction.note || ""} placeholder="Add a note..." />
      </div>
    )}
  </div>


  // <a
  //   className="right row-fe-c"
  //   href={interaction.followUpLink || "#"}
  // >
  //   <span>Follow up ➔</span>
  // </a>
