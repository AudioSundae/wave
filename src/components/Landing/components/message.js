import React from 'react';
let cn = require('classnames');
export default props => {
  return(
    <div className={cn(["landing-message", "row", { "reverse": props.from === "user", "hideImg": !props.showImg }])} >
      <div className="img" />
      <div className="msg">
        <div>{props.content}</div>
      </div>
    </div>
  )
}
