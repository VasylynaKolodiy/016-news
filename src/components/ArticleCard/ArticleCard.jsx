import React from 'react';
import './ArticleCard.scss'
import {Link} from "react-router-dom";
import {ReactComponent as FavoritesIcon} from '../../assets/img/HomePage/ArticleCard/heart.svg';
import Avatar from "@mui/material/Avatar";

const ArticleCard = ({article}) => {
  let dataArticle = new Date(article.updatedAt)
  return (
    <div className='articleCard'>
      <div className='articleCard__info'>

        <div className='articleCard__info-top'>
          <div>
            <Link className='articleCard__author-link' to={`/articles/${article.author.username}`}>
              <Avatar
                className='articleCard__author-photo'
                src={article.author.image}
                alt={article.author.username}
                sx={{height: '60px', width: '60px'}}
              />
            </Link>
            <div>
              <p className='articleCard__data'>
                {dataArticle.getDate()} {dataArticle.toLocaleString('default', {month: 'long'})} {dataArticle.getFullYear()}
              </p>
              <Link
                className='articleCard__author-name'
                to={`/articles/${article.author.username}`}
              >
                {article.author.username}
              </Link>
            </div>
          </div>

          <div className='articleCard__favorites'>
            <FavoritesIcon/>
            <p className='articleCard__favorites-count'>{article.favoritesCount}</p>
          </div>
        </div>

        <div className='articleCard__info-bottom'>
          <p className='articleCard__description'>{article.description}</p>
          <div className='articleCard__taglist'>
            {article.tagList?.map((tag, index) => <span className='articleCard__tagitem' key={index}>{tag} </span>)}
          </div>
        </div>
      </div>
      <Link className='articleCard__link overlay' to={`/articles/${article.slug}`}/>
    </div>
  );
};

export default ArticleCard;