import React, {useEffect} from 'react';
import './ArticleDetailPage.scss'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_ARTICLE_REQUEST, GET_COMMENTS_REQUEST} from "../../actions/articles";
import Loader from "../../components/Loader/Loader";
import {ReactComponent as FavoritesIcon} from "../../assets/img/HomePage/ArticleCard/heart.svg";
import Comments from "../../components/Comments/Comments";
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";

const ArticleDetailPage = () => {
  const params = useParams();
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

          <div className='articleDetailPage__top'>
            <AuthorInfo author={article.author} dateAuthorInfo={dateArticle}/>

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


          <h3 className='articleDetailPage__description'>{article.description}</h3>
          <p className='articleDetailPage__body'>{String(article.body).replaceAll('\\n', ' ')}</p>

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


