import React from 'react';
import './AuthorInfo.scss'
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const AuthorInfo = ({author = {}, dateAuthorInfo = ''}) => {
  return (
    <div className='authorInfo'>
      <Link className='authorInfo__link' to={`/@${author.username}`}>
        <Avatar
          className='authorInfo__photo'
          src={author.image}
          alt={author.username}
          sx={{height: '60px', width: '60px'}}
        />
        <p className='authorInfo__name hoverLink'>{author.username}</p>
      </Link>

      <p className='authorInfo__date'>
        {dateAuthorInfo.toLocaleString('default', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </p>
    </div>

  );
};

export default AuthorInfo;