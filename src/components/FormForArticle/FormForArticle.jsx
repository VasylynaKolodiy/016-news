import React, {useState} from 'react';
import './FormForArticle.scss'
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import {useSelector} from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";

const FormForArticle = ({newArticle, setNewArticle}) => {

  const allTagsState = useSelector((state) => state.generals.tags).tags;
  let allTags = allTagsState.map(tag => ({title: tag}))
  const [formTags, setFormTags] = useState([])

  function handleInputChange(event, value) {
    value.map((v) => {
      setNewArticle({...newArticle, tagList:[...newArticle.tagList, v.title]})
    })
  }
  console.log(newArticle, 'newArticle')

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
        {/*<TextField*/}
        {/*  label="Tag list"*/}
        {/*  type="text"*/}
        {/*  variant="standard"*/}
        {/*  value={newArticle.tagList}*/}
        {/*  onChange={(event) => setNewArticle({...newArticle, tagList: (event.target.value.split(','))})}*/}
        {/*/>*/}

        <Autocomplete


          multiple
          id="tags-standard"

          options={allTags}
          getOptionLabel={(option) => option.title}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          //defaultValue={[allTags[0]]}
          onChange={handleInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Tags"
            />
          )}
        />


      </FormControl>

    </div>
  );
};

export default FormForArticle;