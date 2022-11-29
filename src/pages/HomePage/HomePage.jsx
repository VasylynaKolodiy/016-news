import React, {useEffect, useState} from 'react';
import './HomePage.scss'
import {useDispatch, useSelector} from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Loader from "../../components/Loader/Loader";
import {GET_ARTICLES_REQUEST} from "../../actions/articles";
import Pagination from "@mui/material/Pagination";
import Tags from "../../components/Tags/Tags";
import {GET_TAGS_REQUEST} from "../../actions/generals";

const HomePage = () => {

  let user = useSelector((state) => state.users.user)?.user;
  const dispatch = useDispatch();
  const isArticlesLoading = useSelector((state) => state.articles.loading);
  const articlesState = useSelector((state) => state.articles.articles);

  const totalCount = articlesState.articlesCount
  const limit = 10;
  let [offset, setOffset] = useState(0)
  let countOfPages = totalCount && Math.ceil(totalCount / limit)
  let [pageNumber, setPageNumber] = useState(1);
  const [tagName, setTagName] = useState('')
  const [feedName, setFeedName] = useState('Global')

  useEffect(() => {
    dispatch({
      type: GET_ARTICLES_REQUEST,
      payload: {
        limit: limit,
        offset: offset,
        tag: '',
      }
    })
  }, [limit, pageNumber, offset,])





  const tagsState = useSelector((state) => state.generals.tags).tags;
  useEffect(() => {
    dispatch({
      type: GET_TAGS_REQUEST,
    })
  }, [])



  const getAllArticles = () => {
    setOffset(0)
    dispatch({
      type: GET_ARTICLES_REQUEST,
      payload: {
        limit: limit,
        offset: offset,
        tag: '',
      }
    })
  }
  const filterArticlesByTag = (tagName) => {
    setOffset(0);
    dispatch({
      type: GET_ARTICLES_REQUEST,
      payload: {
        limit: limit,
        offset:offset,
        tag: tagName,
      }
    })
  }

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    setOffset(limit * (value) - limit)
  }

  let openFeed = (feed) => {
    let i;
    let x = document.getElementsByClassName("feeds__tabs-inner");
    let btn = document.getElementsByClassName('feeds__tabs-button')
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      btn[i]?.classList?.remove("active")
    }
    document.getElementsByClassName(feed)[0].classList.add('active')
    document.getElementById(feed).style.display = "block"
  }



  return (
    <main className='homePage'>
      <div className="feeds__tabs">

        <button
          className="feeds__tabs-button Global hoverLink"
          onClick={() => {
            openFeed('Global');
            setFeedName('Global');
            getAllArticles()
          }}>
          Global Feeds
        </button>


        {user &&
        <button
          className="feeds__tabs-button Your hoverLink "
          onClick={() => {
            openFeed('Your');
            setFeedName('Your');
          }}>
          Your Feeds
        </button>}

        {tagName &&
        <button
          className="feeds__tabs-button Tags hoverLink"
          onClick={() => {
            openFeed('Tags')
            filterArticlesByTag(tagName);
            setFeedName('Tags');
          }}>
          Tags Feeds
        </button>}
      </div>



      {isArticlesLoading
        ? <Loader/>
        : <div className='homePage__wrapper'>

          <div>

            <div id="Global" className="feeds__tabs-inner">
              <div className=' articlesList'>
                {console.log(articlesState,'Global State')}
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





            <div id="Your" className="feeds__tabs-inner">
              <div>
                lalalala
              </div>
            </div>





            <div id="Tags" className="feeds__tabs-inner">
              <div className='articlesList'>
                {console.log(articlesState,'Tags State')}
                {articlesState.articles?.map((article, index) => (
                  <ArticleCard article={article} key={index}/>)
                )}
              </div>
            </div>
          </div>
        </div>
      }



        {/*<Tags tagName={tagName} setTagName={setTagName} openFeed={openFeed}/>*/}

        <section className='tags'>
          <p className='tags__title'>
            General tags:
          </p>

          <ul className="tags__list">
            {tagsState?.map((tag, index) => (
              <li
                className={`tags__item ${tag === tagName ? 'selected' : ''}`}
                key={index}>
                <p
                  className='tags__link'
                  onClick={() =>  {
                    setTagName(tag);
                    openFeed('Tags')
                    filterArticlesByTag(tagName);
                  }}>
                  {tag}
                </p>
              </li>
            ))}
          </ul>

        </section>


    </main>
  );
};

export default HomePage;

