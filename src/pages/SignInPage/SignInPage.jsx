import React, {useEffect, useState} from 'react';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_USER_REQUEST} from "../../actions/users";
import FormHelperText from "@mui/material/FormHelperText";

const SignInPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  let [myLoginUser, setMyLoginUser] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch();
  let loginUserState = useSelector((state) => state.users.user);
  let loginError = useSelector((state) => state.users.error);

  loginError && console.log(Object.keys(loginError)[0], Object.values(loginError)[0][0], 'loginError')
  const clickOnButton = async () => {
    dispatch({type: LOGIN_USER_REQUEST, payload: myLoginUser})
  }

  useEffect(() => {
    if (loginUserState) {
      navigate("/")
    }
  }, [loginUserState])

  return (
    <main className='signPage'>

      <form className='sign__form' onSubmit={(event) => event.preventDefault()}>
        <FormControl className='formControl__email formControl'>
          <TextField
            error={
              Boolean(loginError) ||
              (myLoginUser.email.length >= 1 && myLoginUser.email.length <= 7) ||
              myLoginUser.email.length >= 100 ||
              !myLoginUser.email.includes('@') ||
              !myLoginUser.email.includes('.')
            }
            label="Email"
            type="email"
            variant="standard"
            value={myLoginUser.email}
            onChange={(event) => setMyLoginUser({...myLoginUser, email: event.target.value})}
            helperText={
              Boolean(loginError) ? (Object.keys(loginError)[0] === 'email') &&  Object.keys(loginError) + ' ' + Object.values(loginError)
                : (myLoginUser.email.length >= 1 && myLoginUser.email.length <= 7) ? 'min length 8 symbols'
                : myLoginUser.email.length >= 100 ? 'max length 100 symbols'
                  : !myLoginUser.email.includes('@') ? 'incorrect email address'
                    : !myLoginUser.email.includes('.') ? "incorrect email address" : ""
            }
          />
        </FormControl>

        <FormControl className='formControl__password formControl'>
          <InputLabel htmlFor="signInUserPassword">Password</InputLabel>
          <Input
            error={
              Boolean(loginError) ||
              (myLoginUser.password.length >= 1 && myLoginUser.password.length <= 4) ||
              myLoginUser.password.length >= 12}
            id="signInUserPassword"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => setMyLoginUser({...myLoginUser, password: event.target.value})}
            value={myLoginUser.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error className='helperText'>
            {Boolean(loginError) ? (Object.keys(loginError)[0] !== 'email') &&  Object.keys(loginError) + ' ' + Object.values(loginError)
              : (myLoginUser.password.length >= 1 && myLoginUser.password.length <= 3) ? 'min length 4 symbols'
                : myLoginUser.password.length >= 12 ? 'max length 12 symbols' : ''}
          </FormHelperText>
        </FormControl>

        <Button
          type='submit'
          variant="outlined"
          onClick={() => clickOnButton(myLoginUser)}>Sign In</Button>
      </form>


    </main>
  );
};

export default SignInPage;