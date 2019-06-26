import React from 'react';
const cn = require('classnames')
export default props => {
  return(
    <div className="home-contacts col-fs-c">
      {props.contacts.map((contact, index) =>
        <div
          className={cn(["row-fs-c", {
            "active": index === props.activeContact
          }])}
          onClick={() => props.onClick(index)}
        >
          <div className="img" />
          <span>{(!!contact.firstName ? contact.firstName : "") + " " + (!!contact.lastName ? contact.lastName : "")}</span>
        </div>
      )}
    </div>
  )
}
