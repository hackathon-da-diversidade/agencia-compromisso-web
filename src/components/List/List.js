import React, {Component} from 'react';
import Header from '../Header/Header';
import fitModelAPI from '../../api/fitModelAPI';
import FitModelCard from "../FitModelCard/FitModelCard";
import Search from "../Search/Search";

class List extends Component {
  state = {
    models: [],
    error: false,
  };

  componentDidMount() {
    this.loadModels();
  }

  loadModels = async () => {
    try {
      const res = await fitModelAPI.getAll();
      this.setState({
        models: res.data,
      });
    } catch {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return (
      <>
        <Header title="Lista" />
        <Search />
        {this.state.models.map(model => (<FitModelCard id={model.id} {...model} />))}
      </>
    );
  }
}

export default List;
