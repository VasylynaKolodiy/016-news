import React, {useState} from 'react';
import './Header.scss'
import {NavLink} from "react-router-dom";
import logoIcon from '../../assets/img/logo.png'

const Header = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));

  function exitUser() {
    localStorage.removeItem('userToken');
    setUserToken(null);
    window.location.reload()
  }

  return (
    <nav className='header'>
      <div className='header__container container'>
        <div className='logo'>
          <img className='logo__image' src={logoIcon} alt='logo'/>
          <NavLink className='logo__link' to='/'/>
        </div>

        {!userToken
          ? <ul className='sign'>
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

          : <ul className='login'>
            <li>
              <NavLink className='loginLink hoverLink' to='/editor'>
                New Article
              </NavLink>
            </li>
            <li>
              <NavLink className='loginLink hoverLink' to='/settings'>
                Setting
              </NavLink>
            </li>
            <li>
              <NavLink className='loginLink hoverLink' to='/articles' onClick={() => exitUser()}>
                Exit
              </NavLink>
            </li>

          </ul>
        }
      </div>


    </nav>
  );
};

export default Header;