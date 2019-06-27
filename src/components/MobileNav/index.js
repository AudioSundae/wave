import React from 'react';
import home_u from '../../img/icons/home_u.svg';
import home_a from '../../img/icons/home_a.svg';
import notifications_u from '../../img/icons/notifications_u.svg';
import notifications_a from '../../img/icons/notifications_a.svg';
import account_u from '../../img/icons/account_u.svg';
import account_a from '../../img/icons/account_a.svg';
import add_u from '../../img/icons/add_u.svg';
import add_a from '../../img/icons/add_a.svg';

export default props =>
  <div className="row-sa-c mobilenav">
    {["home", "notifications", "add", "account"].map((page, index) =>
      <div
        className="col-c-c"
        key={index}
        onClick={() => props.onSwitchPage(page)}
      >
        <img
          src={page === "home"
            ? home_a
            : page === "notifications"
              ? notifications_a
              : page === "add"
                ? add_a
                : page === "account"
                  ? account_a
                  : ""
          }
          style={{
            opacity: page === props.page ? 1 : 0
          }}
          className="max icon-size-m"
          alt="active"
        />
        <img
          src={page === "home"
            ? home_u
            : page === "notifications"
              ? notifications_u
              : page === "add"
                ? add_u
                : page === "account"
                  ? account_u
                  : ""
          }
          style={{
            opacity: page === props.page ? 0 : 1
          }}
          alt="inactive"
          className="max icon-size-m"
        />
      </div>
    )}

  </div>
