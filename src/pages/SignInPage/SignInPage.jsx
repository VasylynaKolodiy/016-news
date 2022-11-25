import React, {useState} from 'react';
import './SignInPage.scss'
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
import axios from "axios";

const SignInPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let [systemError, setSystemError] = useState('');
  const navigate = useNavigate();

  let [myUser, setMyUser] = useState({
    email: '',
    password: '',
  })

  let data = {user: myUser}
  const createUser = async (data) => {
    try {
      const {data: response} = await axios.post('https://api.realworld.io/api/users/login', data);
      localStorage.setItem('userToken', JSON.stringify(response.user.token));
      navigate("/")
      // window.location.reload()
    } catch (error) {
      setSystemError(error)
    }
  };

  return (
    <main className='signPage'>
      <form className='sign__form' onSubmit={(event) => event.preventDefault()}>

        <FormControl className='formControl__email formControl'>
          <TextField
            label="Email"
            type="email"
            variant="standard"
            value={myUser.email}
            onChange={(event) => setMyUser({...myUser, email: event.target.value})}
          />
        </FormControl>

        <FormControl className='formControl__password formControl'>
          <InputLabel htmlFor="signInUserPassword">Password</InputLabel>
          <Input
            id="signInUserPassword"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => setMyUser({...myUser, password: event.target.value})}
            value={myUser.password}
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
          onClick={() => createUser(data)}>Sign In</Button>
      </form>
    </main>
  );
};

export default SignInPage;