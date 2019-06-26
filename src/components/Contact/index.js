import React from 'react';
import x from '../../img/icons/x.svg';
export default props => {
  return(
    <div className="home-contact home-h-c home-w-c flex">
      <div
        className="x col-c-c"
        onClick={() => props.onClose("none")}
      >
        <img src={x} />
      </div>
    </div>
  )
}
