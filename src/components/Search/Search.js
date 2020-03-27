import React, {Component} from 'react';
import {TextField} from "@material-ui/core";
import fitModelAPI from "../../api/fitModelAPI";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      models: []
    }
  }

  searchModel = async (search) => {
    try {
      const res = await fitModelAPI.search(search);
      this.setState({
        models: res.data,
      });
    } catch {
      this.setState({
        error: true,
      });
    }
  };

  onChange = async event => {
    this.searchModel(event.target.value);
  };

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
