import React, {useEffect, useState} from 'react';
import './HomePage.scss'
import {useDispatch, useSelector} from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loader from "../../components/Loader/Loader";
import {GET_ARTICLES_REQUEST} from "../../actions/articles";

const HomePage = () => {
  const dispatch = useDispatch();
  const isArticlesLoading = useSelector((state) => state['articles'].loading);
  const articlesFullResult = useSelector((state) => state['articles']['articles']);
  const totalCount = articlesFullResult.articlesCount

  useEffect(() => {
    dispatch({
      type: GET_ARTICLES_REQUEST,
      payload: '',
    })
  }, [])

  return (
    <main className='homePage'>
      {isArticlesLoading
        ? <Loader/>
        : <div className='articlesList'>
          {articlesFullResult.articles?.map((article, index) => <ArticleCard article={article} key={index}/>)}
        </div>
      }
    </main>
  );
};

export default HomePage;


// <div className='homePage__article' key={index}>
//
//   <div className='homePage__userWrapper'>
//   {Object.keys(article.author)?.map((prop, i) =>
//     <div className='homePage__user' key={i}>
//       <span><strong>{prop.toUpperCase()}: </strong></span>
//       <span>{article.author[prop]}</span>
//     </div>
//   )}
//   </div>
//
//   <div className='homePage__infoWrapper' >
//   {Object.keys(article)?.map((prop, i) =>
//     i !== 9 &&
//     <div className='homePage__info' key={i}>
//       <span><strong>{prop.toUpperCase()}: </strong></span>
//       <span>{article[prop]}</span>
//     </div>
//   )}
//     </div>
//
//   </div>