import React from 'react';
import './Comments.scss'
import AuthorInfo from "../AuthorInfo/AuthorInfo";

const Comments = ({comments}) => {
  return (
    <div className="comments">
      <h3 className='comments__title'>Comments ({comments?.length}):</h3>

      {comments.map && comments?.map((comment, index) =>
        (<div className='comments__item' key={index}>
          <AuthorInfo author={comment.author} dateAuthorInfo={new Date(comment.updatedAt)}/>
          <div className='comments__body'>{comment.body}</div>
        </div>)
      )}
    </div>
  );
};

export default Comments;