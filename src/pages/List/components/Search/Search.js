import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';

import classes from './Search.module.css';

const Search = ({ term, onChange }) => {
  const [typingTimeout, setTypingTimeout] = useState(0);

  const handleChange = (term) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        onChange(term);
      }, 1000)
    );
  };

  return (
    <div className={classes.search}>
      <TextField
        name="searchField"
        label="Busca"
        value={term}
        onChange={(e) => handleChange(e.target.value)}
        className={classes.searchField}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

Search.propTypes = {
  term: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;
