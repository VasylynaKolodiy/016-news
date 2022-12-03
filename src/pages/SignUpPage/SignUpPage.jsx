import React, { useState} from 'react';
import './SignUpPage.scss'
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEW_USER_REQUEST} from "../../actions/users";
import {Navigate} from "react-router-dom";


const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  let [myNewUser, setMyNewUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  let data = {user: myNewUser}
  const dispatch = useDispatch();
  let newUserState = useSelector((state) => state.users.user);
  const clickOnButton = () => {
    dispatch({type: CREATE_NEW_USER_REQUEST, payload: data});
  }

  if(newUserState) return <Navigate replace to="/" />;
  
  console.log(newUserState, 'newUserState')


  return (
    <main className='signPage'>
      <form className='sign__form' onSubmit={(event) => event.preventDefault()}>
        <FormControl className='formControl__name formControl'>
          <TextField
            label="Name"
            type="text"
            variant="standard"
            value={myNewUser.username}
            onChange={(event) => setMyNewUser({...myNewUser, username: event.target.value})}
          />
        </FormControl>

        <FormControl className='formControl__email formControl'>
          <TextField
            label="Email"
            type="email"
            variant="standard"
            value={myNewUser.email}
            onChange={(event) => setMyNewUser({...myNewUser, email: event.target.value})}
          />
        </FormControl>

        <FormControl className='formControl__password formControl'>
          <InputLabel htmlFor="signUpUserPassword">Password</InputLabel>
          <Input
            id="signUpUserPassword"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => setMyNewUser({...myNewUser, password: event.target.value})}
            value={myNewUser.password}
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
          onClick={() => clickOnButton()}>Sign Up</Button>
      </form>
    </main>
  );
};

export default SignUpPage;