import React from 'react';
import './Comments.scss'
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Comments = ({comments}) => {
  console.log(comments, 'commentsAA')

  return (
    <div className="comments">
      <h3 className='comments__title'>Comments ({comments?.length}):</h3>
      {comments.map && comments?.map((comment, index) =>
        (<div key={index}>
          {comment.body}

          <div className='comments__author-info'>
            <Link className='comments__author-link' to={`/comments/${comment.author?.username}`}>
              <Avatar
                className='comments__author-photo'
                src={comment.author?.image}
                alt={comment.author?.username}
                sx={{height: '60px', width: '60px'}}
              />
            </Link>
            <div>
              <p className='comments__data'>
              </p>
              <Link
                className='comments__author-name'
                to={`/comments/${comment.author?.username}`}
              >
                {comment.author?.username}
              </Link>
            </div>
          </div>

          <hr/>
        </div>)
      )}
    </div>
  );
};

export default Comments;