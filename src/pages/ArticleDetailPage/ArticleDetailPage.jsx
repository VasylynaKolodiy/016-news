import React, {useEffect} from 'react';
import './ArticleDetailPage.scss'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_ARTICLE_REQUEST, GET_COMMENTS_REQUEST} from "../../actions/articles";
import Loader from "../../components/Loader/Loader";
import Avatar from "@mui/material/Avatar";
import {ReactComponent as FavoritesIcon} from "../../assets/img/HomePage/ArticleCard/heart.svg";
import Comments from "../../components/Comments/Comments";

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

  console.log(article, 'article')
  console.log(comments, 'comments')

  let dataArticle = new Date(article.updatedAt)

  return (
    <main className='articleDetailPage'>
      {isArticleLoading
        ? <Loader/>
        : <div className='articleDetailPage__content'>

          <div className='articleDetailPage__author-info'>
            <Link className='articleDetailPage__author-link' to={`/articles/${article.author?.username}`}>
              <Avatar
                className='articleDetailPage__author-photo'
                src={article.author?.image}
                alt={article.author?.username}
                sx={{height: '60px', width: '60px'}}
              />
            </Link>
            <div>
              <p className='articleDetailPage__data'>
                {dataArticle.getDate()} {dataArticle.toLocaleString('default', {month: 'long'})} {dataArticle.getFullYear()}
              </p>
              <Link
                className='articleDetailPage__author-name'
                to={`/articles/${article.author?.username}`}
              >
                {article.author?.username}
              </Link>
            </div>

            <div className='articleDetailPage__favorites'>
              <FavoritesIcon/>
              <p className='articleDetailPage__favorites-count'>{article?.favoritesCount}</p>
            </div>

            <div className='articleDetailPage__following'>
              <p className={`articleDetailPage__follow ${article.author?.following ? 'isFollow' : ''}`}>
                Following: {String(article.author?.following)}</p>
            </div>
          </div>

          <h3 className='articleDetailPage__description'>{article.description}</h3>
          <p className='articleDetailPage__body'>{String(article.body).replaceAll('\\n', ' ')}</p>

          <div className='articleDetailPage__taglist'>
            {article.tagList?.map((tag, index) => <span className='articleCard__tagitem' key={index}>{tag} </span>)}
          </div>

          <Comments comments={comments}/>




        </div>
      }
    </main>
  );
};

export default ArticleDetailPage;


