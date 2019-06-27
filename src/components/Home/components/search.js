import React from 'react';
import searchLogo from '../../../img/icons/search.svg';
export default props =>
  <div className="home-search row-fs-c">
    <img src={searchLogo} alt="" />
    <input placeholder="Search" />
  </div>
