import React, {useEffect} from 'react';
import './ArticleDetailPage.scss'
import {Link, useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {ReactComponent as FavoritesIcon} from "../../assets/img/HomePage/ArticleCard/heart.svg";
import Comments from "../../components/Comments/Comments";
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {ReactComponent as FollowIcon} from "../../assets/img/follow.svg";
import {ReactComponent as UnFollowIcon} from "../../assets/img/unfollow.svg";

import {
  ADD_FAVORITES_REQUEST,
  DELETE_ARTICLE_REQUEST, DELETE_FAVORITES_REQUEST,
  GET_ARTICLE_REQUEST,
  GET_COMMENTS_REQUEST
} from "../../actions/articles";

import {ReactComponent as EditButton} from "../../assets/img/edit.svg";
import {ReactComponent as DeleteButton} from "../../assets/img/delete-button.svg";

const ArticleDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  let user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const isArticleLoading = useSelector((state) => state.articles.loading);
  const article = useSelector((state) => state.articles.article);
  const comments = useSelector((state) => state.articles.comments);
  const loadingFavorite = useSelector((state) => state.articles.loadingFavorite);

  useEffect(() => {
    dispatch({
      type: GET_ARTICLE_REQUEST,
      payload: {
        slug: params.slug,
        token: user?.token,
      }
    })
    dispatch({
      type: GET_COMMENTS_REQUEST,
      payload: {
        slug: params.slug,
        token: user?.token,
      }
    })
  }, [params.slug])
  let dateArticle = new Date(article.updatedAt)

  const deleteArticle = () => {
    dispatch({
      type: DELETE_ARTICLE_REQUEST,
      payload: {
        slug: article.slug,
        token: user?.token,
        page: 'detailPage',
      },
      navigate: navigate,
    })
  }

  const addToFavorites = () => {
    dispatch({
      type: ADD_FAVORITES_REQUEST,
      payload: {
        slug: article.slug,
        token: user?.token,
      }
    })
  }

  const deleteFromFavorites = () => {
    dispatch({
      type: DELETE_FAVORITES_REQUEST,
      payload: {
        slug: article.slug,
        token: user?.token,
      }
    })
  }

  return (
    <main className='articleDetailPage'>
      {isArticleLoading
        ? <Loader/>
        : <div className='articleDetailPage__content'>

          <BreadCrumbs name={article.slug?.slice(0, 20) + '...'}/>

          <div className='articleDetailPage__top'>
            <AuthorInfo author={article.author} dateAuthorInfo={dateArticle}/>

            <div className='articleDetailPage__social'>

              {article.author?.username === user?.username && (
                <div className='articleDetailPage__editor'>
                  <EditButton title='Edit article' onClick={() => navigate(`/editor/${article.slug}`)}/>
                  <DeleteButton title='Delete article' onClick={() => deleteArticle()}/>
                </div>
              )}

              <div className={`articleDetailPage__follow ${article.author?.following ? 'isFollow' : ''}`}>
                  {article.author?.following ? <UnFollowIcon title='UnFollow'/> : <FollowIcon title='Follow'/>}
              </div>

              <div
                className={`articleDetailPage__favorites ${article?.favorited ? 'favorited' : ''} ${loadingFavorite ? 'loadingFavorite' : ''}`}
                onClick={(event) => {
                  return (loadingFavorite
                      ? event.preventDefault()
                      : (user
                        ? article.favorited ? deleteFromFavorites() : addToFavorites()
                        : navigate('/signin'))
                  )
                }}
              >
                <FavoritesIcon/>
                <p className='articleDetailPage__favorites-count'>{article?.favoritesCount}</p>
              </div>


            </div>
          </div>

          <p className='articleDetailPage__title'>{article.title}</p>
          <p className='articleDetailPage__body'>{String(article.body).replaceAll('\\n', ' ')}</p>
          <p className='articleDetailPage__description'>{article.description}</p>

          <div className='articleDetailPage__taglist'>
            {article.tagList?.map((tag, index) => (
              <Link className='articleCard__tagitem' key={index} to='#'>{tag} </Link>)
            )}
          </div>
          <Comments comments={comments}/>
        </div>
      }
    </main>
  );
};

export default ArticleDetailPage;


