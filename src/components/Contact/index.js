import React from 'react';
import Top from './components/top';
import Bio from './components/bio';
import Keywords from './components/keywords';
import Interactions from './components/interactions';

import x from '../../img/icons/x.svg';

export default props => {
  return props.contact
    ? <div className="home-contact home-h-c home-w-c flex col-fs-c">
        <div className="max">
          <div
            className="x col-c-c"
            onClick={() => props.onClose("none")}
          >
            <img src={x} alt="contact" />
          </div>
          <Top {...props} />
          <Bio {...props} />
          <Interactions {...props} />
          <Keywords {...props} />
        </div>
      </div>
    : <div />
}
