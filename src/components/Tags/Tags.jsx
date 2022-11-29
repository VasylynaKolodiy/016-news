import React, {useEffect} from 'react';
import './Tags.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_TAGS_REQUEST} from "../../actions/generals";

const Tags = ({tagName, setTagName,openFeed}) => {

  const dispatch = useDispatch();
  const tagsState = useSelector((state) => state.generals.tags).tags;
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

      <ul className="tags__list">
        {tagsState?.map((tag, index) => (
          <li
            className={`tags__item ${tag === tagName ? 'selected' : ''}`}
            key={index}>
            <p
              className='tags__link'
              onClick={() =>  {setTagName(tag); openFeed('Tags')}}>
              {tag}
            </p>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Tags;