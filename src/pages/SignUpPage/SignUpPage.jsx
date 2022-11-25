import React, {useState} from 'react';
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
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {

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
    username: '',
    email: '',
    password: '',
  })

  let data = {user: myUser}
  const createUser = async (data) => {
    try {
      const {data: response} = await axios.post('https://api.realworld.io/api/users', data);
      localStorage.setItem('userToken', JSON.stringify(response.user.token));
      navigate("/")
      window.location.reload()
    } catch (error) {
      setSystemError(error)
    }
  };

  return (
    <main className='signPage'>
      <form className='sign__form' onSubmit={(event) => event.preventDefault()}>
        <FormControl className='formControl__name formControl'>
          <TextField
            label="Name"
            type="text"
            variant="standard"
            value={myUser.username}
            onChange={(event) => setMyUser({...myUser, username: event.target.value})}
          />
        </FormControl>

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
          <InputLabel htmlFor="signUpUserPassword">Password</InputLabel>
          <Input
            id="signUpUserPassword"
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
          onClick={() => createUser(data)}>Sign Up</Button>
      </form>
    </main>
  );
};

export default SignUpPage;