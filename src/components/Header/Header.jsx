import React from 'react';
import './Header.scss'
import {NavLink} from "react-router-dom";
import logoIcon from '../../assets/img/logo.png'
import {useDispatch, useSelector} from "react-redux";
import {LOGOUT} from "../../actions/users";

const Header = () => {
  const dispatch = useDispatch();
  let loginUserState = useSelector((state) => state.users.user);

  function exitUser() {
    dispatch({type: LOGOUT, payload: loginUserState});
  }

  return (
    <nav className='header'>
      <div className='header__container container'>
        <div className='logo'>
          <img className='logo__image' src={logoIcon} alt='logo'/>
          <NavLink className='logo__link' to='/'/>
        </div>

        {!loginUserState
          ? !loginUserState && <ul className='sign'>
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

          : loginUserState &&
          (
            <div className='login__wrapper'>

              <NavLink className='loginLink hoverLink active loginLink-user' to={`profiles/${loginUserState?.username}`}>
                <img src={loginUserState?.image} alt="user"/>
                {loginUserState?.username}
              </NavLink>


              <ul className='login'>
                <li>
                  <NavLink className='loginLink hoverLink' to='/editor'>
                    New Article
                  </NavLink>
                </li>
                <li>
                  <NavLink className='loginLink hoverLink' to='/settings'>
                    Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink className='loginLink hoverLink' to='/articles' onClick={() => exitUser()}>
                    Exit
                  </NavLink>
                </li>
              </ul>


            </div>


          )
        }
      </div>


    </nav>
  );
};

export default Header;