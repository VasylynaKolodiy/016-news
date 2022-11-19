import React, {useEffect, useState} from 'react';
import './ArticleDetailPage.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_ARTICLE_REQUEST} from "../../actions/articles";
import Loader from "../../components/Loader/Loader";

const ArticleDetailPage = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const isArticleLoading = useSelector((state) => state['articles'].loading);
  const articleFull = useSelector((state) => state['articles']['article']);
  let article = articleFull.article

  useEffect(() => {
    dispatch({
      type: GET_ARTICLE_REQUEST,
      payload: params.slug,
    })
  }, [params.slug])

  return (
    <main className='articleDetailPage'>
      {isArticleLoading
        ? <Loader/>
        : <div>
          {article && Object.keys(article.author).map((prop, index) =>
            (<div className='articleDetailPage__author' key={index}>
              <span><strong>{prop.toUpperCase()}: </strong></span>
              <span>{article.author[prop] || '-'}</span>
            </div>))
          }


          {article && Object.keys(article).map((prop, index) =>
            (<div className='articleDetailPage__info' key={index}>
              {
                (prop !== 'author' && prop !== 'slug' && prop !== 'tagList') &&
                <div>
                  <span><strong>{prop.toUpperCase()}: </strong></span>
                  <span>{article[prop] || '-'}</span>
                </div>
              }
            </div>))
          }


          {article && <div>
            <span><strong>TAGLIST: </strong></span>
            {article['tagList']?.map((elem, index) => <span key={index}>{elem} </span>)}
          </div>}


        </div>
      }
    </main>
  );
};

export default ArticleDetailPage;


