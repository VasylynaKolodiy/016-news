import React, {useEffect, useState} from 'react';
import './NewArticlePage.scss'
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEW_ARTICLE_REQUEST} from "../../actions/articles";
import {useNavigate} from "react-router-dom";
import FormForArticle from "../../components/FormForArticle/FormForArticle";
import {GET_TAGS_REQUEST} from "../../actions/generals";
import Loader from "../../components/Loader/Loader";

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
  let newArticleError = useSelector((state) => state.articles.error);
  const allTagsState = useSelector((state) => state.generals.tags)?.tags;
  const navigate = useNavigate()

  useEffect(() => {
    dispatch({
      type: GET_TAGS_REQUEST,
    })
  }, [])

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
        {!allTagsState
          ? <Loader/>
          : (<>
              <FormForArticle
                newArticle={newArticle}
                setNewArticle={setNewArticle}
                newArticleError={newArticleError}
                allTagsState={allTagsState}
              />

              <Button
                type='submit'
                variant="outlined"
                onClick={() => clickOnButton()}
              >ADD</Button>
            </>
          )
        }
      </form>
    </main>
  );
};

export default NewArticlePage;