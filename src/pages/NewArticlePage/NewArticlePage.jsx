import React, {useState} from 'react';
import './NewArticlePage.scss'
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEW_ARTICLE_REQUEST} from "../../actions/articles";
import {useNavigate} from "react-router-dom";
import FormForArticle from "../../components/FormForArticle/FormForArticle";

const NewArticlePage = () => {

  const [newArticle, setNewArticle] = useState({
    title: '',
    description: '',
    body: '',
    tagList: [],
  })

  const dispatch = useDispatch();
  let loginUserState = useSelector((state) => state.users.user);
  let data = {article: newArticle}
  const navigate = useNavigate();

  const clickOnButton = async () => {
    dispatch({
      type: CREATE_NEW_ARTICLE_REQUEST,
      navigate: navigate,
      payload: {
        data: data,
        token: loginUserState.token,
      },
    })
  }

  return (
    <main className="newArticle">
      <h2 className='newArticle__title'>Create new article</h2>
      <form
        className='newArticle__form'
        onSubmit={(event) => event.preventDefault()}
      >
        <FormForArticle newArticle={newArticle} setNewArticle={setNewArticle}/>

        <Button
          type='submit'
          variant="outlined"
          onClick={() => clickOnButton()}
        >ADD</Button>
      </form>
    </main>
  );
};

export default NewArticlePage;