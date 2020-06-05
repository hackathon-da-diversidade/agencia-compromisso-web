import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';
import fitModelAPI from '../../api/fitModelAPI';
import { BrowserRouter as Router } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { resolvePromises } from '../../utils/formHelpers';

jest.mock('../../api/fitModelAPI');

beforeEach(() => jest.clearAllMocks());

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

  it('should render pagination component', function () {
    const wrapper = mount(
      <Router>
        <List />
      </Router>
    );

    expect(wrapper.find('.MuiPagination-root')).toHaveLength(1);
  });

  it('should call API to delete candidate', async () => {
    fitModelAPI.delete.mockResolvedValue();
    fitModelAPI.getAllPaginated.mockResolvedValue({
      data: {
        content: [{ id: 'candidate1' }, { id: 'candidate2' }],
      },
    });

    const wrapper = mount(
      <Router>
        <List />
      </Router>
    );

    await resolvePromises(wrapper);

    wrapper.find('#candidate1').find(DeleteIcon).simulate('click');

    expect(fitModelAPI.delete).toBeCalledTimes(1);
    expect(fitModelAPI.delete).toBeCalledWith('candidate1');
  });

  it('should reload list after delete', async () => {
    fitModelAPI.delete.mockResolvedValue();
    fitModelAPI.getAllPaginated.mockResolvedValue({
      data: {
        content: [{ id: 'candidate1' }, { id: 'candidate2' }],
      },
    });

    const wrapper = mount(
      <Router>
        <List />
      </Router>
    );

    await resolvePromises(wrapper);

    fitModelAPI.getAllPaginated.mockResolvedValue({
      data: {
        content: [{ id: 'candidate2' }],
      },
    });

    wrapper.find('#candidate1').find(DeleteIcon).simulate('click');

    await resolvePromises(wrapper);

    expect(fitModelAPI.getAllPaginated).toHaveBeenCalledTimes(2);
    expect(wrapper.find('#candidate1')).toHaveLength(0);
  });
});
