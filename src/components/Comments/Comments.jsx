import React, {useState} from 'react';
import './Comments.scss'
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import NewComment from "../NewComment/NewComment";
import {useDispatch, useSelector} from "react-redux";
import {ReactComponent as DeleteButton} from '../../assets/img/delete-button.svg'
import {DELETE_COMMENT_REQUEST} from "../../actions/articles";
import {useParams} from "react-router-dom";
import {ReactComponent as LoadIcon} from "../../assets/img/load.svg";

const Comments = ({comments}) => {
  let user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const params = useParams();
  const QUANTITY = 10
  const [countOfComments, setCountOfComments] = useState(QUANTITY)

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

      {console.log(comments, 'comments')}
      {comments?.slice(0, countOfComments).map((comment, index) =>
        (<div className='comments__item' key={index}>
            <AuthorInfo author={comment.author} dateAuthorInfo={new Date(comment.updatedAt)}/>
            <div className='comments__body'>{comment.body}
              {comment.author?.username === user?.username && (
                <div className='comments__delete' onClick={() => deleteOwnComment(comment.id)}>
                  <DeleteButton title='Delete comment'/>
                </div>
              )}
            </div>
          </div>)
      )}

      {comments.length > countOfComments && (
        <div
          className='comments__buttonLoadMore'
          onClick={() => setCountOfComments(countOfComments + QUANTITY)}
        >
          <LoadIcon title='Load more comments'/> Load more...
        </div>)}

    </div>
  );
};

export default Comments;