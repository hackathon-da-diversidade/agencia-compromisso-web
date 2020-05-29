import React, { Component } from 'react';
import Header from '../Header/Header';
import fitModelAPI from '../../api/fitModelAPI';
import FitModelCard from '../FitModelCard/FitModelCard';
import Search from '../Search/Search';
import Pagination from '@material-ui/lab/Pagination';
import classes from './List.module.css';
import { withRouter } from 'react-router-dom';

class List extends Component {
  searchRef;

  state = {
    models: [],
    error: false,
    size: 10,
    count: 0,
    page: 0,
  };

  componentDidMount() {
    this.loadModels();
  }

  loadModels = async (event = null, page = 1) => {
    try {
      const name = this.searchRef.state.name;

      if (name === '') {
        const res = await fitModelAPI.getAllPaginated(
          page - 1,
          this.state.size
        );
        this.updatePagination(res.data);
      } else {
        await this.searchRef.searchModel(name, page - 1, this.state.size);
      }
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

  onEdit = id => {
    this.props.history.push(`cadastro/${id}`);
  };

  onDetail = id => {
    this.props.history.push(`modelo/${id}`);
  };

  render() {
    return (
      <>
        <Header title="Lista"/>
        <Search
          ref={ref => (this.searchRef = ref)}
          onChange={this.updatePagination}
          onError={this.handleError}
        />
        {this.state.models.map(model => (
          <FitModelCard
            key={model.id}
            id={model.id}
            {...model}
            onEdit={this.onEdit}
            onDetail={this.onDetail}
          />
        ))}
        <div className={classes.PaginationWrapper}>
          <Pagination count={this.state.count} onChange={this.loadModels} />
        </div>
      </>
    );
  }
}

export default withRouter(List);
