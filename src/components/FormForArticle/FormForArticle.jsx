import React, { useState } from 'react';
import './FormForArticle.scss'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const FormForArticle = ({newArticle, setNewArticle, newArticleError='', allTagsState=[]}) => {
  const [formTags, setFormTags] = useState([])

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
          error={Boolean(newArticleError)}
          helperText={Boolean(newArticleError) &&  Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
        />
      </FormControl>

      <FormControl className='newArticle__description formControl'>
        <TextField
          label="Description"
          type="text"
          variant="standard"
          value={newArticle.description}
          onChange={(event) => setNewArticle({...newArticle, description: event.target.value})}
          error={Boolean(newArticleError)}
          helperText={Boolean(newArticleError) && Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
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
          error={Boolean(newArticleError)}
          helperText={Boolean(newArticleError) &&  Object.keys(newArticleError) + ' ' + Object.values(newArticleError)}
        />
      </FormControl>

      <FormControl className='newArticle__tagList formControl'>
        {<Autocomplete
          multiple
          id="tags-standard"
          options={allTagsState}
          value={newArticle.tagList || formTags}
          onChange={handleSelectChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Select tags"
              placeholder="Tags"
            />
          )}
        />}
      </FormControl>

    </div>
  );
};

export default FormForArticle;