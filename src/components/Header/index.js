import React from 'react';
import home_u from '../../img/icons/home_u.svg';
import home_a from '../../img/icons/home_a.svg';
import notifications_u from '../../img/icons/notifications_u.svg';
import notifications_a from '../../img/icons/notifications_a.svg';
import account_u from '../../img/icons/account_u.svg';
import account_a from '../../img/icons/account_a.svg';
import add from '../../img/icons/add_u.svg';
export default props =>
  <div className="header home-w-head row-fe-c">
    <div className="icon-size">
      <img className="icon-size" src={add} alt="add" />
    </div>
    <div className="divider" />
    {["home", "notifications", "account"].map((page, index) =>
      <div
        className="icon-size col-c-c"
        key={index}
        onClick={() => props.onSwitchPage(page)}
      >
        <img
          src={page === "home" ? home_a : page === "notifications" ? notifications_a : account_a}
          style={{
            opacity: page === props.page ? 1 : 0
          }}
          className="max icon-size"
          alt="active"
        />
        <img
          src={page === "home" ? home_u : page === "notifications" ? notifications_u : account_u}
          style={{
            opacity: page === props.page ? 0 : 1
          }}
          className="max icon-size"
          alt="inactive"
        />
      </div>
    )}
  </div>
