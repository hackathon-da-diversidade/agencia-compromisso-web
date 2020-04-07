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
      const res = await fitModelAPI.getAllPaginated(0, 10);
      this.setState({
        models: res.data.content,
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
      </>
    );
  }
}

export default List;
