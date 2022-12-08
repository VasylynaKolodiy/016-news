import React from 'react';
import './Comments.scss'
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import NewComment from "../NewComment/NewComment";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as DeleteButton} from '../../assets/img/delete-button.svg'
import {DELETE_COMMENT_REQUEST} from "../../actions/articles";
import {useParams} from "react-router-dom";

const Comments = ({comments}) => {
  let user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const params = useParams();

  const deleteOwnComment = (id) => {
    dispatch({
      type: DELETE_COMMENT_REQUEST,
      payload: {
        slug: params.slug,
        token: user?.token,
        id: id,
      }
    })
  }

  return (
    <div className="comments">
      <h3 className='comments__title'>Comments ({comments?.length}):</h3>
      {user && <NewComment/>}

      {comments.map && comments?.map((comment, index) =>
        (<div className='comments__item' key={index}>
          <AuthorInfo author={comment.author} dateAuthorInfo={new Date(comment.updatedAt)}/>
          <div className='comments__body'>{comment.body}
            {comment.author?.username === user?.username && (
              <div className='comments__delete' onClick={() => deleteOwnComment(comment.id)}>
                <DeleteButton />
              </div>
            )}

          </div>
        </div>)
      )}


    </div>
  );
};

export default Comments;