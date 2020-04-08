import React, { Component } from 'react';
import Header from '../Header/Header';
import fitModelAPI from '../../api/fitModelAPI';
import FitModelCard from '../FitModelCard/FitModelCard';
import Search from '../Search/Search';
import Pagination from '@material-ui/lab/Pagination';
import classes from './List.module.css';

class List extends Component {
  state = {
    models: [],
    error: false,
    size: 15,
    count: 0,
    page: 0,
  };

  componentDidMount() {
    this.loadModels();
  }

  loadModels = async (event = null, page = 1) => {
    try {
      const res = await fitModelAPI.getAllPaginated(page - 1, this.state.size);
      this.updatePagination(res.data);
    } catch {
      this.handleError();
    }
  };

  updatePagination = pagination => {
    this.setState({
      models: pagination.content,
      count: pagination.totalPages,
      page: pagination.number,
    });
  };

  handleError = () => {
    this.setState({ error: true });
  };

  render() {
    return (
      <>
        <Header title="Lista"/>
        <Search onChange={this.updatePagination} onError={this.handleError}/>
        {this.state.models.map(model => (<FitModelCard id={model.id} {...model} />))}
        <div className={classes.PaginationWrapper}>
          <Pagination count={this.state.count} page={this.state.page} onChange={this.loadModels}/>
        </div>
      </>
    );
  }
}

export default List;
