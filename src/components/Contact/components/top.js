import React from 'react';

import mail from '../../../img/icons/mail.svg';
import linkedin from '../../../img/icons/linkedin.svg';
import twitter from '../../../img/icons/twitter.svg';
import star_gray from '../../../img/icons/star_gray.svg';
import star_blue from '../../../img/icons/star_blue.svg';

let cn = require('classnames');

export default props =>
  <div className="top-info home-w-c-in row">
    <div className="img" />
    <div className="flex row-sb-c">
      <div className="text col">
        <span className="name">{(!!props.contact.firstName ? props.contact.firstName : "") + " " + (!!props.contact.lastName ? props.contact.lastName : "")}</span>
        <span className="loc">met in san francisco</span>
      </div>
      <div className="social row-fe-c">
        <div className="star col-c-c">
          <img className={cn({'active': props.favorited})} src={star_blue} alt="favorite" />
          <img className={cn({'active': !props.favorited})} src={star_gray} alt="favorite" />
        </div>
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
