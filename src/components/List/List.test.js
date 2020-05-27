import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from './List';
import fitModelAPI from '../../api/fitModelAPI';
import {BrowserRouter as Router} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

jest.mock('../../api/fitModelAPI');

beforeEach(() => jest.clearAllMocks());

configure({adapter: new Adapter()});

describe('<List />', () => {
  it('should load fit models when entering the component', () => {
    fitModelAPI.getAllPaginated.mockReturnValue({
      data: {
        content: [],
      },
    });

    mount(
      <Router>
        <List/>
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
        <List/>
      </Router>
    );

    expect(wrapper.find('.MuiPagination-root')).toHaveLength(1);
  });

  it('should call API to delete candidate', async () => {

    const wrapper = mount(
      <Router>
        <List/>
      </Router>
    );

    wrapper.find('#candidate1').find(DeleteIcon).simulate('click');

    expect(fitModelAPI.delete).toBeCalledTimes(1);
    expect(fitModelAPI.delete).toBeCalledWith('1');
  });
});

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

test('loads and displays greeting', async () => {
  fitModelAPI.delete.mockResolvedValue();
  fitModelAPI.getAllPaginated.mockResolvedValue({
    data: {
      content: [
        {id: 'candidate1'},
        {id: 'candidate2'},
      ],
    },
  });

  const test = mount(
    <Router>
      <List/>
    </Router>
  );

  await flushPromises();

  test.find('#candidate1');
});
