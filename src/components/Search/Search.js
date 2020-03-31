import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import fitModelAPI from "../../api/fitModelAPI";
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import InputAdornment from "@material-ui/core/InputAdornment";
import classes from './Search.module.css';

class Search extends Component {
  search = new BehaviorSubject('');

  constructor(props) {
    super(props);
    this.state = {
      models: []
    }
  }

  componentDidMount() {
    this.search
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(query => this.searchModel(query));
  }

  searchModel = async (search) => {
    try {
      const res = await fitModelAPI.search(search);
      this.props.onChange(res.data);
    } catch {
      this.props.onError();
    }
  };

  onChange = async event => this.search.next(event.target.value);

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
    )
  }
}

export default Search;
