import React, {useEffect} from 'react';
import './ArticleDetailPage.scss'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_ARTICLE_REQUEST, GET_COMMENTS_REQUEST} from "../../actions/articles";
import Loader from "../../components/Loader/Loader";
import {ReactComponent as FavoritesIcon} from "../../assets/img/HomePage/ArticleCard/heart.svg";
import Comments from "../../components/Comments/Comments";
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Button from "@mui/material/Button";

const ArticleDetailPage = () => {
  const params = useParams();
  let user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const isArticleLoading = useSelector((state) => state.articles.loading);
  const article = useSelector((state) => state.articles.article);
  const comments = useSelector((state) => state.articles.comments);

  useEffect(() => {
    dispatch({
      type: GET_ARTICLE_REQUEST,
      payload: params.slug,
    })
    dispatch({
      type: GET_COMMENTS_REQUEST,
      payload: params.slug,
    })
  }, [params.slug])
  let dateArticle = new Date(article.updatedAt)

  return (
    <main className='articleDetailPage'>
      {isArticleLoading
        ? <Loader/>
        : <div className='articleDetailPage__content'>

          <BreadCrumbs name={article.slug?.slice(0, 20)+'...'}/>

          <div className='articleDetailPage__top'>
            <AuthorInfo author={article.author} dateAuthorInfo={dateArticle}/>

            {article.author?.username === user?.username && (
              <div className='articleDetailPage__editor'>
                <Button variant="outlined">Edit</Button>
                <Button variant="outlined">Delete</Button>
              </div>
            )}

            <div className='articleDetailPage__social'>
              <div className='articleDetailPage__following'>
                <a className={`articleDetailPage__follow ${article.author?.following ? 'isFollow' : ''}`} href='#'>
                  Following: {String(article.author?.following)}</a>
              </div>

              <div className='articleDetailPage__favorites'>
                <FavoritesIcon/>
                <a className='articleDetailPage__favorites-count' href='#'>{article?.favoritesCount}</a>
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


