import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/articles" className="site-name">
        SHARETRADE.com
      </Link>
    </div>
  );
}

export default Header;
