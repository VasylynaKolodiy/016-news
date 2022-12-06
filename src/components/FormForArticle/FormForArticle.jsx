import React from 'react';
import './FormForArticle.scss'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const FormForArticle = ({newArticle, setNewArticle}) => {
  return (
    <div className='formForArticle'>

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

    </div>
  );
};

export default FormForArticle;