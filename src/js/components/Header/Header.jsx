import React from 'react';
import constants from '../../../data/constants';

const Header = () => (
  <header>
    <div className="row">
      <h1>{constants.header.TITLE}</h1>
    </div>
  </header>
);

export default Header;
