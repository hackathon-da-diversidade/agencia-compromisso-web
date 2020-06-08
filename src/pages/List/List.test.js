import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListComponent from './List';
import candidateAPI from 'api/candidateAPI';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from '@testing-library/react';

jest.mock('api/candidateAPI');

const data = {
  content: [
    {
      id: '5e825a1d6d058825e13b1dc7',
      name: 'Test',
      birthday: '08/09/1999',
      phoneNumber: '(99)999999999',
      genderExpression: 'MALE',
    },
  ],
  totalPages: 0,
  number: 0,
};

const List = () => (
  <Router>
    <ListComponent />
  </Router>
);

const fakeDebounceTime = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

configure({ adapter: new Adapter() });

describe('<List />', () => {
  beforeAll(() => {
    candidateAPI.getAllPaginated.mockReturnValue({ data });
    candidateAPI.searchByName.mockReturnValue({ data });
  });

  it('should load candidates when entering the component', () => {
    mount(<List />);

    const pagination = { size: 10, count: 0, page: 0 };

    expect(candidateAPI.getAllPaginated).toHaveBeenCalledTimes(1);
    expect(candidateAPI.getAllPaginated).toHaveBeenCalledWith(pagination);
  });

  it('should render pagination component', function() {
    const wrapper = mount(<List />);

    expect(wrapper.find('.MuiPagination-root')).toHaveLength(1);
  });

  it('should return candidate on search of valid candidate name', async () => {
    const name = 'Test';
    const pagination = { size: 10, count: 0, page: 0 };

    const wrapper = mount(<List />);

    act(() => {
      wrapper.find('input[name="searchField"]').simulate('change', {
        target: { name: 'searchField', value: name },
      });
    });

    await fakeDebounceTime(1200);

    expect(candidateAPI.searchByName).toBeCalledTimes(1);
    expect(candidateAPI.searchByName).toBeCalledWith(name, pagination);
  });
});
