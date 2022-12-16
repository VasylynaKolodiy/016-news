import React, {useEffect, useState} from 'react';
import './SettingsPage.scss'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import {EDIT_USER_REQUEST, GET_USER_REQUEST} from "../../actions/users";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";


const SettingsPage = () => {
  const dispatch = useDispatch();
  const [userState, setUserState] = useState(useSelector((state) => state.users.user) || {});
  // const [editUser, setEditUser] = useState({
  //   email: "",
  //   token: "",
  //   username: "",
  //   bio: "",
  //   image: "",
  // })
  let data = {user: userState}
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: GET_USER_REQUEST,
      payload: userState?.token,
    })
  }, [])

  const editSettings = () => {
    dispatch({
      type: EDIT_USER_REQUEST,
      navigate: navigate,
      setEditUser: setUserState,
      payload: {
        token: userState?.token,
        data: data,
      }
    })
  }

  return (
    <main className='settingsPage'>
      <h1 className='settingsPage__title'>Your Settings</h1>

      <form
        className='settingsPage__form'
        onSubmit={(event) => event.preventDefault()}
      >
        <FormControl className='settingsPage__name formControl'>
          <TextField
            label="Your name"
            type="text"
            variant="standard"
            value={userState?.username || ''}
            onChange={(event) => setUserState({...userState, username: event.target.value})}
            //error={Boolean(newArticleError)}
            //helperText={Boolean(newArticleError) &&  Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
          />
        </FormControl>

        <FormControl className='settingsPage__name formControl'>
          <TextField
            label="Your photo"
            type="text"
            variant="standard"
            value={userState?.image || ''}
            onChange={(event) => setUserState({...userState, image: event.target.value})}
            //error={Boolean(newArticleError)}
            //helperText={Boolean(newArticleError) &&  Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
          />
        </FormControl>

        <FormControl className='settingsPage__name formControl'>
          <TextField
            label="About yourself"
            type="text"
            variant="standard"
            value={userState?.bio || ''}
            multiline
            rows={4}
            onChange={(event) => setUserState({...userState, bio: event.target.value})}
            //error={Boolean(newArticleError)}
            //helperText={Boolean(newArticleError) &&  Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
          />
        </FormControl>

        <FormControl className='settingsPage__name formControl'>
          <TextField
            label="Email"
            type="email"
            variant="standard"
            value={userState?.email || ''}
            onChange={(event) => setUserState({...userState, email: event.target.value})}
            //error={Boolean(newArticleError)}
            //helperText={Boolean(newArticleError) &&  Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
          />
        </FormControl>

        <FormControl className='settingsPage__name formControl'>
          <TextField
            label="Password"
            type="text"
            variant="standard"
            value={userState?.password}
            onChange={(event) => setUserState({...userState, password: event.target.value})}
            //error={Boolean(newArticleError)}
            //helperText={Boolean(newArticleError) &&  Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
          />
        </FormControl>

        <div>
          <Button
            type='submit'
            variant="outlined"
            onClick={() => editSettings()}
          >
            Update
          </Button>
        </div>


      </form>
    </main>
  );
};

export default SettingsPage;