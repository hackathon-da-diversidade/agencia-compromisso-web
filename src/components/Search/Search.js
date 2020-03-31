import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import fitModelAPI from "../../api/fitModelAPI";
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


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
      <TextField
        name="searchField"
        label="Busca de modelo por nome"
        onChange={this.onChange}
      />
    )
  }
}

export default Search;
