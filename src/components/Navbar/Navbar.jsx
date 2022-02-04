import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <div className='navbar'>
    <div className="navbar__logo">
      <img src={images.gericht} alt="logo" />
    </div>
    <ul className="navbar__links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#menu">Menu</a></li>
      <li className="p__opensans"><a href="#awards">Awards</a></li>
      <li className="p__opensans"><a href="#contacts">Contact</a></li>
    </ul>
    <div className="navbar__login">
      <a href="#login" className='p__opensans'>Login / Register</a>
      <span />
      <a href="#login" className='p__opensans'>Book Table</a>
    </div>

    <div className="navbar__smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
      {toggleMenu && 
      <div className="navbar__smallscreen--overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)}/>
        <ul className="navbar__smallscreen-links">
          <li className="p__opensans"><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
          <li className="p__opensans"><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
          <li className="p__opensans"><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
          <li className="p__opensans"><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
          <li className="p__opensans"><a href="#contacts" onClick={() => setToggleMenu(false)}>Contacts</a></li>
        </ul>
      </div>}
    </div>
  </div>
)};

export default Navbar;
