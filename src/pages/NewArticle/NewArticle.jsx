import React, {useState} from 'react';
import './NewArticle.scss'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {CREATE_NEW_ARTICLE_REQUEST} from "../../actions/articles";
import {useNavigate} from "react-router-dom";

const NewArticle = () => {

  const [newArticle, setNewArticle] = useState ({
    title: '',
    description: '',
    body: '',
    tagList: [],
  })


  const dispatch = useDispatch();
  let newArticleState = useSelector((state) => state.articles.newArticle);
  let newArticleError = useSelector((state) => state.articles.error);

  let loginUserState = useSelector((state) => state.users.user);
  let data = {article: newArticle}
  const clickOnButton = async () => {
    dispatch({
      type: CREATE_NEW_ARTICLE_REQUEST,
      payload: {
        data: data,
        token: loginUserState.token,
      }})
  }

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (newArticleState) {
  //     navigate(`/articles/${newArticleState.article?.title}`)
  //   }
  // }, [newArticleState])


  return (
    <main className="newArticle">

      <form
        className='newArticle__form'
        onSubmit={(event) => event.preventDefault()}
      >
        <FormControl className='newArticle__title formControl'>
          <TextField
            // error={}
            label="Title"
            type="text"
            variant="standard"
            value={newArticle.title}
            onChange={(event) => setNewArticle({...newArticle, title: event.target.value})}
            // helperText={}
          />
        </FormControl>

        <FormControl className='newArticle__description formControl'>
          <TextField
            // error={}
            label="Description"
            type="text"
            variant="standard"
            value={newArticle.description}
            onChange={(event) => setNewArticle({...newArticle, description: event.target.value})}
            // helperText={}
          />
        </FormControl>

        <FormControl className='newArticle__body formControl'>
          <TextField
            // error={}
            label="Body"
            type="text"
            variant="standard"
            multiline
            rows={4}
            value={newArticle.body}
            onChange={(event) => setNewArticle({...newArticle, body: event.target.value})}
            // helperText={}
          />
        </FormControl>

        <FormControl className='newArticle__tagList formControl'>
          <TextField
            // error={}
            label="Tag list"
            type="text"
            variant="standard"
            value={newArticle.tagList}
            onChange={(event) => setNewArticle({...newArticle, tagList: event.target.value})}
            // helperText={}
          />
        </FormControl>

        <Button
          type='submit'
          variant="outlined"
          onClick={() => clickOnButton()}
        >+ Add</Button>

      </form>

    </main>
  );
};

export default NewArticle;