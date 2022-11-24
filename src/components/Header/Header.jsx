import React from 'react';
import './Header.scss'
import {NavLink} from "react-router-dom";
import logoIcon from '../../assets/img/logo.png'

const Header = () => {
  return (
    <nav className='header'>
      <div className='header__container container'>
        <div className='logo'>
          <img className='logo__image' src={logoIcon} alt='logo'/>
          <NavLink className='logo__link' to='/'/>
        </div>

        <ul className='sign'>
          <li>
            <NavLink className='signLink hoverLink' to='/signin'>
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink className='signLink hoverLink' to='/signup'>
              Sign Up
            </NavLink>
          </li>

        </ul>
      </div>


    </nav>
  );
};

export default Header;