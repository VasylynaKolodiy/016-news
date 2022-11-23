import React from 'react';
import './SignUpPage.scss'
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const SignUpPage = () => {
  return (
    <main className='signUpPage'>
      <FormControl>
        <TextField
          id="username"
          label="User name"
          type="text"
          variant="standard"
          hiddenLabel
        />

        <TextField
          id="useremail"
          label="Email"
          type="email"
          variant="standard"
          hiddenLabel
        />



        {/*<FilledInput*/}
        {/*  id="filled-adornment-password"*/}
        {/*  type={values.showPassword ? 'text' : 'password'}*/}
        {/*  value={values.password}*/}
        {/*  onChange={handleChange('password')}*/}
        {/*  endAdornment={*/}
        {/*    <InputAdornment position="end">*/}
        {/*      <IconButton*/}
        {/*        aria-label="toggle password visibility"*/}
        {/*        onClick={handleClickShowPassword}*/}
        {/*        onMouseDown={handleMouseDownPassword}*/}
        {/*        edge="end"*/}
        {/*      >*/}
        {/*        {values.showPassword ? <VisibilityOff /> : <Visibility />}*/}
        {/*      </IconButton>*/}
        {/*    </InputAdornment>*/}
        {/*  }*/}
        {/*/>*/}

        <TextField
          id="userpassword"
          label="Password"
          type="password"
          variant="standard"
          hiddenLabel
          autoComplete="current-password"
        />


      </FormControl>
    </main>
  );
};

export default SignUpPage;