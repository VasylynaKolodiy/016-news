import React, {useEffect, useState} from 'react';
import './HomePage.scss'
import {useDispatch, useSelector} from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loader from "../../components/Loader/Loader";
import {GET_ARTICLES_REQUEST} from "../../actions/articles";
import Pagination from "@mui/material/Pagination";
import Tags from "../../components/Tags/Tags";

const HomePage = () => {
  let user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const isArticlesLoading = useSelector((state) => state.articles.loading);
  const articlesState = useSelector((state) => state.articles.articles);
  const totalCount = articlesState.articlesCount
  const LIMIT = 10;
  let [offset, setOffset] = useState(0)
  let countOfPages = totalCount && Math.ceil(totalCount / LIMIT)
  let [pageNumber, setPageNumber] = useState(1);
  const [tagName, setTagName] = useState('')
  const [feedName, setFeedName] = useState('Global')

  useEffect(() => {
    dispatch({
      type: GET_ARTICLES_REQUEST,
      payload: {
        limit: LIMIT,
        offset: offset,
        tag: tagName,
        token: user?.token,
      }
    })
  }, [pageNumber, offset, tagName, feedName, user?.token])

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    setOffset(LIMIT * (value) - LIMIT)
  }

  return (
    <main className='homePage'>
      <div className="feeds__tabs">

        <button
          className={`feeds__tabs-button Global hoverLink ${feedName === 'Global' ? 'active' : ''}`}
          onClick={() => {
            setTagName('')
            setFeedName('Global');
            setPageNumber(1);
          }}
        >
          Global Feeds
        </button>

        {user &&
        <button
          className={`feeds__tabs-button Your hoverLink ${feedName === 'Your' ? 'active' : ''}`}
          onClick={() => {
            setFeedName('Your');
          }}
        >
          Your Feeds
        </button>
        }

        {tagName &&
        <button
          className={`feeds__tabs-button Tags hoverLink ${feedName === 'Tags' ? 'active' : ''}`}
          onClick={() => {
            setOffset(0);
            setFeedName('Tags');
            setPageNumber(1)
          }}
        >
          Tags Feeds <span>(#{tagName})</span>
        </button>
        }
      </div>

      {isArticlesLoading
        ? <Loader/>
        : <div className='homePage__wrapper'>
          <div>

            {feedName === "Global" &&
            <div id="Global" className="feeds__tabs-inner">
              <div className=' articlesList'>
                {articlesState.articles?.map((article, index) => (
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
            }

            {feedName === "Your" &&
            <div id="Your" className="feeds__tabs-inner">
              <div className='articlesList'>
                lalalala
                lalalalalalalalalalalala
                lalalala
                lalalala
              </div>
            </div>
            }

            {feedName === "Tags" &&
            <div id="Tags" className="feeds__tabs-inner">
              <div className='articlesList'>
                {articlesState.articles?.map((article, index) => (
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
            }

          </div>
        </div>
      }

      <Tags
        tagName={tagName}
        setTagName={setTagName}
        setOffset={setOffset}
        setFeedName={setFeedName}
        setPageNumber={setPageNumber}
      />
    </main>
  );
};

export default HomePage;

