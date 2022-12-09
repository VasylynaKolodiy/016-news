import React, {useEffect, useState} from 'react';
import './ProfilePage.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_ARTICLES_REQUEST} from "../../actions/articles";
import {GET_PROFILE_REQUEST} from "../../actions/profiles";
import {ReactComponent as FollowIcon} from "../../assets/img/followAuthor.svg";
import Avatar from "@mui/material/Avatar";
import TabButton from "../../components/TabButton/TabButton";
import Loader from "../../components/Loader/Loader";
import TabPage from "../../components/TabPage/TabPage";

const ProfilePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  let user = useSelector((state) => state.users.user);
  const profileState = useSelector((state) => state.profiles.profile).profile;

  const isArticlesLoading = useSelector((state) => state.articles.loading);
  const articlesState = useSelector((state) => state.articles.articles);
  const totalCount = articlesState.articlesCount
  const LIMIT = 10;
  let [offset, setOffset] = useState(0)
  let countOfPages = totalCount && Math.ceil(totalCount / LIMIT)
  let [pageNumber, setPageNumber] = useState(1);
  const [feedName, setFeedName] = useState(params.authorName.replace(' ', '_'))

  useEffect(() => {
    {
      feedName === 'Favorited' ?
        dispatch({
          type: GET_ARTICLES_REQUEST,
          payload: {
            limit: LIMIT,
            offset: offset,
            token: user?.token,
            favorited: params.authorName,
          }
        })
        :
        dispatch({
          type: GET_ARTICLES_REQUEST,
          payload: {
            limit: LIMIT,
            offset: offset,
            token: user?.token,
            authorName: params.authorName,
          }
        })
    }
  }, [pageNumber, offset, feedName, user?.token])

  useEffect(() => {
    dispatch({
      type: GET_PROFILE_REQUEST,
      payload: params.authorName,
    })
  }, [params.authorName])

  const handlePageChange = (event, value) => {
    setPageNumber(value);
    setOffset(LIMIT * (value) - LIMIT)
  }

  return (
    <main className='profilePage'>

      <div className='profilePage__info'>
        <div className='profilePage__icon'>
          <Avatar
            className='profilePage__photo'
            src={profileState?.image}
            alt={profileState?.username}
            sx={{height: '90px', width: '90px'}}
          />
          <div className={`profilePage__follow ${profileState?.following ? 'isFollow' : ''}`}>
            <FollowIcon title='Follow'/>
          </div>
        </div>
        <p className='profilePage__name'>{profileState?.username}</p>
      </div>


      <div className="feeds__tabs">
        <TabButton
          tabName={params.authorName.replace(' ', '_')}
          setFeedName={setFeedName}
          feedName={feedName}
          setPageNumber={setPageNumber}
          tabText='acrticles'
        />

        <TabButton
          tabName='Favorited'
          setFeedName={setFeedName}
          feedName={feedName}
          setPageNumber={setPageNumber}
          tabText='acrticles'
        />
      </div>


      {isArticlesLoading
        ? <Loader/>
        : <div className='profilePage__wrapper'>

          {feedName === params.authorName.replace(' ', '_') &&
          <TabPage
            tabPageId='My'
            articlesState={articlesState}
            countOfPages={countOfPages}
            pageNumber={pageNumber}
            handlePageChange={handlePageChange}
          />}

          {feedName === 'Favorited' &&
          <TabPage
            tabPageId='Favorited'
            articlesState={articlesState}
            countOfPages={countOfPages}
            pageNumber={pageNumber}
            handlePageChange={handlePageChange}
          />}

        </div>
      }


    </main>

  );
};

export default ProfilePage;