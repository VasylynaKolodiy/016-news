import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import FormForArticle from "../../components/FormForArticle/FormForArticle";
import Button from "@mui/material/Button";
import {
  EDIT_ARTICLE_REQUEST,
  GET_ARTICLE_REQUEST,
} from "../../actions/articles";
import Loader from "../../components/Loader/Loader";

const EditorPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  let loginUserState = useSelector((state) => state.users.user);
  const isArticleLoading = useSelector((state) => state.articles.loading);
  const dispatch = useDispatch();

  const [editArticle, setEditArticle] = useState({
    title: '',
    description: '',
    body: '',
    tagList: '',
    slug: '',
  })

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
    article: editArticle,
  }

  const editOwnArticle = async () => {
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

      {isArticleLoading
        ? <Loader/>
        : <>
          <h2 className='newArticle__title'>Edit article</h2>
          <form
            className='newArticle__form'
            onSubmit={(event) => event.preventDefault()}
          >
            <FormForArticle newArticle={editArticle} setNewArticle={setEditArticle}/>

            <Button
              type='submit'
              variant="outlined"
              onClick={() => editOwnArticle()}
            >Edit</Button>
          </form>
        </>
      }
    </main>
  );
};

export default EditorPage;