import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';
import fitModelAPI from '../../api/fitModelAPI';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('../../api/fitModelAPI');

configure({ adapter: new Adapter() });

describe('<List />', () => {
  it('should load fit models when entering the component', () => {
    fitModelAPI.getAllPaginated.mockReturnValue({
      data: {
        content: [],
      },
    });

    mount(
      <Router>
        <List />
      </Router>
    );

    let page = 0;
    let size = 10;

    expect(fitModelAPI.getAllPaginated).toHaveBeenCalledTimes(1);
    expect(fitModelAPI.getAllPaginated).toHaveBeenCalledWith(page, size);
  });

  it('should render pagination component', function() {
    const wrapper = mount(
      <Router>
        <List />
      </Router>
    );

    expect(wrapper.find('.MuiPagination-root')).toHaveLength(1);
  });
});
