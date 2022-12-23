import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import {Navigate} from "react-router-dom";
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

  let [myLoginUser, setMyLoginUser] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch();
  let loginUserState = useSelector((state) => state.users.user);
  let loginError = useSelector((state) => state.users.error);

  const [doValidation, setDoValidation] = useState(false)
  const signIn = async () => {
    dispatch({type: LOGIN_USER_REQUEST, payload: myLoginUser})
    setDoValidation(true)
  }
  if (loginUserState) return <Navigate replace to="/"/>;

  return (
    <main className='signPage'>

      <form className='sign__form' onSubmit={(event) => event.preventDefault()}>
        <FormControl className='formControl__email formControl'>
          <TextField
            error={doValidation && Boolean(loginError)}
            label="Email"
            type="email"
            variant="standard"
            value={myLoginUser.email}
            onChange={(event) => setMyLoginUser({...myLoginUser, email: event.target.value})}
            helperText={
              doValidation && (
                Boolean(loginError) && (
                  Object.keys(loginError)[0] === 'email') && Object.keys(loginError) + ' ' + Object.values(loginError)
            )}
          />
        </FormControl>

        <FormControl className='formControl__password formControl'>
          <InputLabel htmlFor="signInUserPassword">Password</InputLabel>
          <Input
            error={doValidation && Boolean(loginError)}
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
            {doValidation && (
              Boolean(loginError) && (
                Object.keys(loginError)[0] !== 'email') && Object.keys(loginError) + ' ' + Object.values(loginError))
            }
          </FormHelperText>
        </FormControl>

        <Button
          type='submit'
          variant="outlined"
          onClick={() => signIn(myLoginUser)}
        >
          Sign In
        </Button>
      </form>
    </main>
  );
};

export default SignInPage;