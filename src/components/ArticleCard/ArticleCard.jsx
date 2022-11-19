import React from 'react';
import './ArticleCard.scss'
import {Link} from "react-router-dom";
import cardImage from '../../assets/img/HomePage/ArticleCard/cardImage.jpg'
import {ReactComponent as FavoritesIcon} from '../../assets/img/HomePage/ArticleCard/heart.svg';

const ArticleCard = ({article}) => {
  let dataArticle = new Date(article.updatedAt)
  console.log(dataArticle, 'dataArticle')
  return (
    <div className='articleCard'>



      <div className='articleCard__imageWrapper'>
        <img className='articleCard__image' src={cardImage} alt='article card'/>
      </div>

      <div className='articleCard__infoWrapper'>

        <div className='articleCard__info-top'>
          <div>
            <Link className='articleCard__author-link' to={`/articles/${article.author.username}`} >
              <p className='articleCard__author'>{article.author.username}</p>
            </Link>
            <p className='articleCard__data'>{article.createdAt}</p>
            <p className='articleCard__data'>{dataArticle.getFullYear()}/{dataArticle.getMonth()}/{dataArticle.getDate()}</p>


          </div>


          <div className='articleCard__favorites'>
            <FavoritesIcon/>
            <p className='articleCard__favorites-count'>{article.favoritesCount}</p>
          </div>

        </div>


        <div className='articleCard__info-bottom'>
          <p className='articleCard__description'>{article.description}</p>
        </div>

      </div>


      <Link className='articleCard__link' to={`/articles/${article.slug}`}></Link>

      <div className='articleCard__overlay'></div>

    </div>
  );
};

export default ArticleCard;