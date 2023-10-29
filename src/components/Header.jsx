import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/articles" className="site-name">
        SHARETRADE.com
      </Link>
    </header>
  );
}

export default Header;
