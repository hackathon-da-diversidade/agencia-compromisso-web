import React, {Component} from 'react';
import Header from '../Header/Header';
import fitModelAPI from '../../api/fitModelAPI';
import FitModelCard from "../FitModelCard/FitModelCard";
import Search from "../Search/Search";
import Pagination from '@material-ui/lab/Pagination';
import classes from './List.module.css'

class List extends Component {
  state = {
    models: [],
    error: false,
    size: 15,
    count: 0,
    page: 0
  };

  componentDidMount() {
    this.loadModels();
  }

  loadModels = async (event = null, page = 1) => {
    try {
      const res = await fitModelAPI.getAllPaginated(page - 1, this.state.size);
      this.setState({
        models: res.data.content,
        count: res.data.totalPages,
        page: res.data.number
      });
    } catch {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const props = {
      onChange: models => this.setState({models}),
      onError: () => this.setState({error: true})
    };

    return (
      <>
        <Header title="Lista" />
        <Search {...props} />
        {this.state.models.map(model => (<FitModelCard id={model.id} {...model} />))}
        <div className={classes.PaginationWrapper}>
          <Pagination count={this.state.count} page={this.state.page} onChange={this.loadModels} />
        </div>
      </>
    );
  }
}

export default List;
