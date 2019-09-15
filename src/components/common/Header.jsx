import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
  <div className="bar top topnav" >
    <Link to="/">
      <span className="bar-item large text-orange" >QuickCredit</span>
    </Link>
    <button className="bar-item right button hide-medium hide-large hover-none">
      <i className="fa fa-bars"></i>
    </button>
    <nav className="nav-menu hide-small">
      <Link to="/login">
       <span className="bar-item right" >Login</span>
      </Link>
      <Link to="/signup">
        <span className="bar-item right" >Signup</span>
      </Link>
    </nav>
  </div>
  );
}
