import React from 'react';

import mail from '../../../img/icons/mail.svg';
import linkedin from '../../../img/icons/linkedin.svg';
import twitter from '../../../img/icons/twitter.svg';

export default props =>
  <div className="top-info home-w-c-in row-fs-c">
    <div className="img" />
    <div className="flex row-sb-c">
      <span>{(!!props.contact.firstName ? props.contact.firstName : "") + " " + (!!props.contact.lastName ? props.contact.lastName : "")}</span>
      <div className="row-fe-c">
        <div className="col-c-c">
          <img src={mail} alt="mail" />
        </div>
        <div className="col-c-c">
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="col-c-c">
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  </div>
