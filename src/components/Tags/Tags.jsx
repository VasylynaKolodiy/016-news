import React, {useEffect} from 'react';
import './Tags.scss'
import {useDispatch, useSelector} from "react-redux";
import {GET_TAGS_REQUEST} from "../../actions/generals";
import {Link} from "react-router-dom";

const Tags = ({setTagName}) => {
  const dispatch = useDispatch();
  const tagsState = useSelector((state) => state.generals.tags).tags;

  useEffect(() => {
    dispatch({
      type: GET_TAGS_REQUEST,
    })
  }, [])

  console.log('tagsState - ', tagsState)

  return (
    <section className='tags'>
      <p className='tags__title'>
        General tags:
      </p>

      <ul className="tags__list">
        {tagsState?.map((tag, index) => (
          <li className="tags__item" key={index}>
            <Link className="tags__link" to='/' onClick={() => setTagName(tag)}>
              {tag}
            </Link>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default Tags;