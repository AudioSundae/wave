import React from 'react';
let cn = require('classnames');
export default props =>
  <div className={cn(["landing-typing", "row-fs-c", props.className])}>
    <div className="img"/>
    <div className="loading row-c-c">
      <div />
      <div />
      <div />
    </div>
  </div>
