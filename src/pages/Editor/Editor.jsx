import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {
  EDIT_ARTICLE_REQUEST,
  GET_ARTICLE_REQUEST,
} from "../../actions/articles";
import FormForArticle from "../../components/FormForArticle/FormForArticle";
import Button from "@mui/material/Button";

const Editor = () => {
  const params = useParams();
  let article = useSelector((state) => state.articles.article);
  console.log(article, 'AAAarticle')
  let loginUserState = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const [editArticle, setEditArticle] = useState(article)

  useEffect(() => {
    dispatch({
      type: GET_ARTICLE_REQUEST,
      payload: {
        slug: params.slug,
        token: loginUserState?.token,
        setEditArticle: setEditArticle,
      }
    })
  }, [params.slug])


  let data = {
    article: {
      title: editArticle.title,
      description: editArticle.description,
      body: editArticle.body,
    }
  }
  const navigate = useNavigate();
  const clickOnButton = async () => {
    dispatch({
      type: EDIT_ARTICLE_REQUEST,
      payload: {
        data: data,
        slug: editArticle.slug,
        token: loginUserState.token,
      },
      navigate: navigate,
    })
  }


  return (
    <main className="newArticle">
      <h2 className='newArticle__title'>Edit article</h2>
      <form
        className='newArticle__form'
        onSubmit={(event) => event.preventDefault()}
      >
        <FormForArticle newArticle={editArticle} setNewArticle={setEditArticle}/>

        <Button
          type='submit'
          variant="outlined"
          onClick={() => clickOnButton()}
        >Edit</Button>

      </form>

    </main>
  );
};

export default Editor;