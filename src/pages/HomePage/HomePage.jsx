import React, {useEffect, useState} from 'react';
import './HomePage.scss'
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {GET_ARTICLES_REQUEST} from "../../actions/articles";
import Tags from "../../components/Tags/Tags";
import TabButton from "../../components/TabButton/TabButton";
import TabPage from "../../components/TabPage/TabPage";

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

        <TabButton
          tabName='Global'
          setFeedName={setFeedName}
          feedName={feedName}
          setTagName={setTagName}
          setPageNumber={setPageNumber}
          tabText='feed'
        />

        {user &&
        <TabButton
          tabName='Your'
          setFeedName={setFeedName}
          feedName={feedName}
          // setTagName={setTagName}
          setPageNumber={setPageNumber}
          tabText='feed'
        />
        }

        {tagName &&
        <TabButton
          tabName='Tags'
          setFeedName={setFeedName}
          feedName={feedName}
          // setTagName={setTagName}
          setPageNumber={setPageNumber}
          tabText='feed'
        />
        }
      </div>

      <div className='homePage__wrapper'>
        {isArticlesLoading
          ? <Loader/>
          : <div className='homePage__wrapperuuno'>

            {feedName === "Global" &&
            <TabPage
              tabPageId='Global'
              articlesState={articlesState}
              countOfPages={countOfPages}
              pageNumber={pageNumber}
              handlePageChange={handlePageChange}
            />}

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
            <TabPage
              tabPageId='Tags'
              articlesState={articlesState}
              countOfPages={countOfPages}
              pageNumber={pageNumber}
              handlePageChange={handlePageChange}
            />}
          </div>
        }
        <Tags
          tagName={tagName}
          setTagName={setTagName}
          setOffset={setOffset}
          setFeedName={setFeedName}
          setPageNumber={setPageNumber}
        />
      </div>
    </main>
  );
};

export default HomePage;

