import React, {useEffect, useState} from 'react';
import './FormForArticle.scss'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useDispatch, useSelector} from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import {GET_TAGS_REQUEST} from "../../actions/generals";

const FormForArticle = ({newArticle, setNewArticle}) => {

  const dispatch = useDispatch();
  const allTagsState = useSelector((state) => state.generals.tags)?.tags;
  const [formTags, setFormTags] = useState([])

  useEffect(() => {
    dispatch({
      type: GET_TAGS_REQUEST,
    })
  }, [])


  function handleSelectChange(event, values) {
    setFormTags(values)
    setNewArticle({...newArticle, tagList: values})
  }

  return (
    <div className='formForArticle'>

      <FormControl className='newArticle__title formControl'>
        <TextField
          label="Title"
          type="text"
          variant="standard"
          value={newArticle.title}
          onChange={(event) => setNewArticle({...newArticle, title: event.target.value})}
        />
      </FormControl>

      <FormControl className='newArticle__description formControl'>
        <TextField
          label="Description"
          type="text"
          variant="standard"
          value={newArticle.description}
          onChange={(event) => setNewArticle({...newArticle, description: event.target.value})}
        />
      </FormControl>

      <FormControl className='newArticle__body formControl'>
        <TextField
          label="Body"
          type="text"
          variant="standard"
          multiline
          rows={4}
          value={newArticle.body}
          onChange={(event) => setNewArticle({...newArticle, body: event.target.value})}
        />
      </FormControl>

      <FormControl className='newArticle__tagList formControl'>
        {<Autocomplete
          multiple
          id="tags-standard"
          options={allTagsState}
          value={formTags}
          onChange={handleSelectChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Tags"
            />
          )}
        />}
      </FormControl>

    </div>
  );
};

export default FormForArticle;