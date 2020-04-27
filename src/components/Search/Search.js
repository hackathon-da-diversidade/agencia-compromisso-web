import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import fitModelAPI from '../../api/fitModelAPI';
import InputAdornment from '@material-ui/core/InputAdornment';
import classes from './Search.module.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: [],
      name: '',
      typing: false,
      typingTimeout: 0,
    };
  }

  searchModel = async (search, page = 1, size = 10) => {
    try {
      const res = await fitModelAPI.search(search, page - 1, size);
      this.props.onChange(res.data);
    } catch {
      this.props.onError();
    }
  };

  onChange = async event => {
    const { typingTimeout } = this.state;

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    this.setState({
      name: event.target.value,
      typing: false,
      typingTimeout: setTimeout(() => {
        this.searchModel(this.state.name);
      }, 1000),
    });
  };

  render() {
    return (
      <div className={classes.search}>
        <TextField
          name="searchField"
          label="Busca"
          onChange={this.onChange}
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
  }
}

export default Search;
