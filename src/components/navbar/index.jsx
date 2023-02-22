import React from 'react';
import './style.scss';

const Navbar = () => {
  return (
    <div>
        <nav>
      <ul>
        <li>
          <a href="#stock">STOCKS</a>
        </li>
        <li>
          <a href="#reits">REITS</a>
        </li>
        <li>
          <a href="#crypto">CRYPTO</a>
        </li>
        <li>
          <a href="#subscription">SUBSCRIPTIONS</a>
        </li>
        <li>
          <a href="#courses">ONLINE COURSES</a>
        </li>
        <li>
          <a href="#contactus">CONTACT US</a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;