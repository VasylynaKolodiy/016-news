import React, {useEffect, useState} from 'react';
import './HomePage.scss'
import {useDispatch, useSelector} from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loader from "../../components/Loader/Loader";
import {GET_ARTICLES_REQUEST} from "../../actions/articles";
import Pagination from "@mui/material/Pagination";

const HomePage = () => {

  const dispatch = useDispatch();
  const isArticlesLoading = useSelector((state) => state['articles'].loading);
  const articlesFullResult = useSelector((state) => state['articles']['articles']);

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
  }, [pageNumber, offset])

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    setOffset(limit * (value - 1))
  }

  return (
    <main className='homePage'>
      {isArticlesLoading
        ? <Loader/>
        : <div>
          <div className='articlesList'>
            {articlesFullResult.articles?.map((article, index) => (
              <ArticleCard article={article} key={index}/>)
            )}
          </div>
          {countOfPages > 1 &&
          (<Pagination
            className='pagination'
            count={countOfPages}
            size="large"
            page={pageNumber}
            onChange={handlePageChange}
          />)
          }
        </div>
      }


    </main>
  );
};

export default HomePage;

