import React, {useEffect, useState} from 'react';
import './HomePage.scss'
import {useDispatch, useSelector} from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loader from "../../components/Loader/Loader";
import {GET_ARTICLES_REQUEST} from "../../actions/articles";
import Pagination from "@mui/material/Pagination";

const HomePage = () => {

  let user = localStorage.getItem('user');
  const dispatch = useDispatch();
  const isArticlesLoading = useSelector((state) => state.articles.loading);
  const articlesFullResult = useSelector((state) => state.articles.articles);

  const totalCount = articlesFullResult.articlesCount
  const limit = 10;
  let [offset, setOffset] = useState(1)
  let countOfPages = totalCount && Math.ceil(totalCount / limit)
  let [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch({
      type: GET_ARTICLES_REQUEST,
      payload: {
        limit: limit,
        offset: offset,
      }
    })
  }, [pageNumber, offset, user])

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    setOffset(limit * (value - 1))
  }

  let openFeed = (feed) => {
    let i;
    let x = document.getElementsByClassName("feeds__tabs-inner");
    let btn = document.getElementsByClassName('feeds__tabs-button')
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      btn[i].classList.remove("active")
    }
    document.getElementsByClassName(feed)[0].classList.add('active')
    document.getElementById(feed).style.display = "block";
  }

  return (
    <main className='homePage'>
      {isArticlesLoading
        ? <Loader/>
        : <div>

          <div className="feeds__tabs">
            <button className="feeds__tabs-button Global hoverLink active" onClick={() => user && openFeed('Global')}>
              Global Feeds
            </button>
            {user && <button className="feeds__tabs-button Your hoverLink " onClick={() => openFeed('Your')}>
              Your Feeds
            </button>}
          </div>

          <div id="Global" className="feeds__tabs-inner">
            <div className=' articlesList'>
              {articlesFullResult.articles?.map((article, index) => (
                <ArticleCard article={article} key={index}/>)
              )}
            </div>
            {countOfPages > 1 &&
            (<Pagination
              className=' pagination'
              count={countOfPages}
              size="large"
              page={pageNumber}
              onChange={handlePageChange}
            />)
            }
          </div>


          {user &&
          <div id="Your" className="feeds__tabs-inner">
            lalalala
          </div>}

        </div>


      }


    </main>
  );
};

export default HomePage;

