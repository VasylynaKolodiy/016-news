import React, {useState} from 'react';
import './NewComment.scss'
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import {useDispatch, useSelector} from "react-redux";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {ADD_COMMENT_REQUEST} from "../../actions/articles";

const NewComment = () => {
  const article = useSelector((state) => state.articles.article);
  let user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const [newComment, setNewArticle] = useState({
    title: '',
    description: '',
    body: '',
    tagList: [],
  })

  const data = {
    comment: {body: ""}
  }

  const addOwnComment = () => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      payload: {
        slug: article.slug,
        token: user?.token,
        data: data,
      }
    })
  }

  return (
    <div className='newComment'>
      <div className='newComment__item'>

        <form
          className='newComment__form'
          onSubmit={(event) => event.preventDefault()}
        >
          <AuthorInfo author={user}/>
          <FormControl className='newComment__body formControl'>
            <TextField
              label="Write a comment"
              type="text"
              variant="standard"
              multiline
              rows={1}
              //value={newComment.body}
              //onChange={(event) => setNewComment({...newComment, body: event.target.value})}
            />

            <Button
              type='submit'
              variant="outlined"
              onClick={() => addOwnComment()}
            >Add comment</Button>

          </FormControl>


        </form>


      </div>
    </div>
  )
};

export default NewComment;