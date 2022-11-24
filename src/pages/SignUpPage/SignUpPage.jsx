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

  const [values, setValues] = useState({
    showPassword: false,
  });


  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
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
      localStorage.setItem('user', JSON.stringify(response));
      navigate("/")
      window.location.reload()
    } catch (error) {
      setSystemError(error)
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setMyUser({...myUser, password: event.target.value})
  };

  return (
    <main className='signUpPage'>
      <form className='signup__form' onSubmit={(event) => handleForm(event)}>
        <FormControl className='formControl__name formControl'>
          <TextField
            id="username"
            label="Name"
            type="text"
            variant="standard"
            hiddenLabel
            value={myUser.username || ''}
            onChange={(event) => setMyUser({...myUser, username: event.target.value})}
          />
        </FormControl>

        <FormControl className='formControl__email formControl'>
          <TextField
            id="useremail"
            label="Email"
            type="email"
            variant="standard"
            hiddenLabel
            value={myUser.email || ''}
            onChange={(event) => setMyUser({...myUser, email: event.target.value})}
          />
        </FormControl>

        <FormControl className='formControl__password formControl'>
          <InputLabel htmlFor="userpassword">Password</InputLabel>
          <Input
            id="userpassword"
            type={values.showPassword ? 'text' : 'password'}
            onChange={(event) => handleChange(event)}
            value={myUser.password || ''}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button type='submit' onClick={() => createUser(data)}>Sign Up</Button>
      </form>
    </main>
  );
};

export default SignUpPage;