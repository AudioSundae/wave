import React from 'react';
import home_inactive from '../../img/icons/home_inactive.svg';
import home_active from '../../img/icons/home_active.svg';
import new_inactive from '../../img/icons/new_inactive.svg';
import new_active from '../../img/icons/new_active.svg';
import notifications_inactive from '../../img/icons/notifications_inactive.svg';
import notifications_active from '../../img/icons/notifications_active.svg';
import profile_inactive from '../../img/icons/profile_inactive.svg';
import profile_active from '../../img/icons/profile_active.svg';
const cn = require('classnames')

export default props =>
  <div className="nav-bar row-sa-c">
    {["home", "new", "notifications", "profile"].map((icon, index) => {
      let img = `${icon}_${props.page === icon ? "" : "in"}active`
      return(
        <div key={index} className="col-c-c" onClick={() => props.onSwitchPage(icon)}>
          <img className={cn({"active": icon === props.page})}
            alt={icon}
            src={
              icon === "home"
                ? home_active
              : icon === "new"
                ? new_active
              : icon === "notifications"
                ? notifications_active
              : icon === "profile"
                ? profile_active
              : ""
          } />
          <img className={cn({"active": icon !== props.page})}
            alt={icon} 
            src={
              icon === "home"
                ? home_inactive
              : icon === "new"
                ? new_inactive
              : icon === "notifications"
                ? notifications_inactive
              : icon === "profile"
                ? profile_inactive
              : ""
          } />
        </div>
      )
    })}
  </div>
