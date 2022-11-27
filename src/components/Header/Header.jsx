import React, {useState} from 'react';
import './Header.scss'
import {NavLink} from "react-router-dom";
import logoIcon from '../../assets/img/logo.png'
import {useDispatch, useSelector} from "react-redux";
import {LOGOUT} from "../../actions/users";

const Header = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(localStorage.getItem('user'));
  let loginUserFullResult = useSelector((state) => state.users.user);

  function exitUser() {
    dispatch({type: LOGOUT, payload: loginUserFullResult});
    setUser(null);
    localStorage.removeItem('user')
  }

  console.log(loginUserFullResult, 'loginUserFullResult')
  return (
    <nav className='header'>
      <div className='header__container container'>
        <div className='logo'>
          <img className='logo__image' src={logoIcon} alt='logo'/>
          <NavLink className='logo__link' to='/'/>
        </div>

        {!loginUserFullResult
          ? !loginUserFullResult && <ul className='sign'>
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

          : loginUserFullResult && <ul className='login'>
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