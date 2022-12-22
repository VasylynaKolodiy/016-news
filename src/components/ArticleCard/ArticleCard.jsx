import React from 'react';
import './ArticleCard.scss'
import {ReactComponent as FavoritesIcon} from '../../assets/img/HomePage/ArticleCard/heart.svg';
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_ARTICLE_REQUEST, DELETE_FAVORITES_REQUEST} from "../../actions/articles";
import {ADD_FAVORITES_REQUEST} from "../../actions/articles";
import {useNavigate} from "react-router-dom";
import {ReactComponent as InfoButton} from "../../assets/img/info.svg";
import {ReactComponent as EditButton} from "../../assets/img/edit.svg";
import {ReactComponent as DeleteButton} from "../../assets/img/delete-button.svg";
import {convertNumber} from "../../helpers";

const ArticleCard = ({article, tabPageId=''}) => {
  let dateArticle = new Date(article.updatedAt)
  let user = useSelector((state) => state.users.user);
  const loadingFavorite = useSelector((state) => state.articles.loadingFavorite)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteArticle = () => {
    dispatch({
      type: DELETE_ARTICLE_REQUEST,
      payload: {
        slug: article.slug,
        token: user?.token,
        page: 'homePage',
      }
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
        tabPageId: tabPageId,
      }
    })
  }

  return (
    <div className='articleCard'>
      <div className='articleCard__info'>
        <Link className='articleCard__link-overlay' to={`/articles/${article.slug}`}/>

        <div className='articleCard__info-top'>
          <AuthorInfo author={article.author} dateAuthorInfo={dateArticle}/>
          <div
            className={`articleCard__favorites ${article.favorited ? 'favorited' : '' } ${loadingFavorite ? 'loadingFavorite' : ''}` }
            onClick={(event) => {
              return ( loadingFavorite
                  ?  event.preventDefault()
                  : (user
                    ? article.favorited ? deleteFromFavorites() : addToFavorites()
                    : navigate('/signin'))
              )}}
          >
            <FavoritesIcon title='Likes'/>
            <p
              className='articleCard__favorites-count'
            >
              {convertNumber(article.favoritesCount)}</p>
          </div>
        </div>

        <div className='articleCard__info-bottom'>
          <p className='articleCard__description'>{article.title}</p>
          <div className='articleCard__wrapper'>
            <div className='articleCard__buttons'>
              <Link className='articleCard__link' to={`/articles/${article.slug}`}>
                <InfoButton title='Read more'/>
              </Link>

              {article.author?.username === user?.username && (
                <div className='articleCard__editor'>
                  <EditButton title='Edit article' onClick={() => navigate(`/editor/${article.slug}`)}/>
                  <DeleteButton title='Delete article' onClick={() => deleteArticle()}/>
                </div>
              )}
            </div>

            <div className='articleCard__taglist'>
              {article.tagList?.map((tag, index) => (
                <Link className='articleCard__tagitem' to='#' key={index}>{tag} </Link>)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;