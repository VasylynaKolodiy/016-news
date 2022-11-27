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
  let data = {user: myLoginUser}
  const dispatch = useDispatch();
  let loginUserFullResult = useSelector((state) => state.users.user);
  let loginError = useSelector((state) => state.users.error);

  loginError && console.log(Object.keys(loginError)[0], Object.values(loginError)[0][0], 'loginError')
  const clickOnButton = async () => {
    dispatch({type: LOGIN_USER_REQUEST, payload: data})
  }

  useEffect(() => {
    if(loginUserFullResult){
      navigate("/")
    }
  }, [loginUserFullResult])

  return (
    <main className='signPage'>
      <form className='sign__form' onSubmit={(event) => event.preventDefault()}>

        <FormControl className='formControl__email formControl'>
          <TextField
            error={Boolean(loginError)}
            label="Email"
            type="email"
            variant="standard"
            value={myLoginUser.email}
            onChange={(event) => setMyLoginUser({...myLoginUser, email: event.target.value})}
          />


          {
            loginError !== "" && (
              <p className='error'>
                {Object.keys(loginError)[0]}
                {Object.values(loginError)[0][0]}
              </p>
            )
          }

        </FormControl>

        <FormControl className='formControl__password formControl'>
          <InputLabel htmlFor="signInUserPassword">Password</InputLabel>
          <Input
            error={Boolean(loginError)}
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
        </FormControl>

        <Button
          type='submit'
          variant="outlined"
          onClick={() => clickOnButton(data)}>Sign In</Button>
      </form>
    </main>
  );
};

export default SignInPage;