import React, {useEffect} from 'react';
import './Tags.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_TAGS_REQUEST} from "../../actions/generals";
import SceletonForTags from "../Sceletons/SceletonForTags/SceletonForTags";

const Tags = ({tagName, setTagName, setOffset, setFeedName, setPageNumber}) => {

  const dispatch = useDispatch();
  const tagsState = useSelector((state) => state.generals.tags).tags;
  const tagsLoading = useSelector((state) => state.generals.loading);

  useEffect(() => {
    dispatch({
      type: GET_TAGS_REQUEST,
    })
  }, [])

  return (
    <section className='tags'>
      <p className='tags__title'>
        General tags:
      </p>

      {tagsLoading
        ? <SceletonForTags/>

        : <ul className="tags__list">
          {tagsState?.map((tag, index) => (
            <li
              className={`tags__item ${tag === tagName ? 'selected' : ''}`}
              key={index}>
              <p
                className='tags__link'
                onClick={() => {
                  setTagName(tag);
                  setOffset(0);
                  setFeedName('Tags')
                  setPageNumber(1)
                }}>
                {tag}
              </p>
            </li>
          ))}
        </ul>
      }

    </section>
  );
};

export default Tags;