import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from '@testing-library/react';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from 'components/Button/Button';
import { resolvePromises } from '../../utils/formHelpers';
import ListComponent from './List';
import candidateAPI from '../../api/candidateAPI';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';

jest.mock('../../api/candidateAPI');

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

const fakeDebounceTime = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

describe('<List />', () => {
  let wrapper;

  beforeAll(() => {
    candidateAPI.getAllPaginated.mockReturnValue({ data });
    candidateAPI.searchByName.mockReturnValue({ data });
  });

  it('should load candidates when entering the component', async () => {
    await act(async () => {
      mount(<List />);
    });

    const pagination = { size: 10, count: 0, page: 0 };

    expect(candidateAPI.getAllPaginated).toHaveBeenCalledTimes(1);
    expect(candidateAPI.getAllPaginated).toHaveBeenCalledWith(pagination);
  });

  it('should render pagination component', async () => {
    await act(async () => {
      wrapper = mount(<List />);
    });

    expect(wrapper.find('.MuiPagination-root')).toHaveLength(1);
  });

  it('should return candidate on search of valid candidate name', async () => {
    const name = 'Test';
    const pagination = { size: 10, count: 0, page: 0 };

    await act(async () => {
      wrapper = mount(<List />);

      wrapper.find('input[name="searchField"]').simulate('change', {
        target: { name: 'searchField', value: name },
      });

      await fakeDebounceTime(1200);
    });

    expect(candidateAPI.searchByName).toBeCalledTimes(1);
    expect(candidateAPI.searchByName).toBeCalledWith(name, pagination);
  });

  it('should call API to delete candidate', async () => {
    candidateAPI.delete.mockResolvedValue();
    candidateAPI.getAllPaginated.mockResolvedValue({
      data: {
        content: [{ id: 'candidate1' }, { id: 'candidate2' }],
      },
    });

    await act(async () => {
      wrapper = mount(
        <Router>
          <List />
        </Router>
      );

      await resolvePromises(wrapper);

      wrapper.find('#candidate1').find(DeleteIcon).simulate('click');

      await resolvePromises(wrapper);

      wrapper
        .find(Dialog)
        .find(DialogActions)
        .find(Button)
        .findWhere((node) => node.text() === 'Excluir')
        .first()
        .simulate('click');

      await resolvePromises(wrapper);
    });

    expect(candidateAPI.delete).toBeCalledTimes(1);
    expect(candidateAPI.delete).toBeCalledWith('candidate1');
  });

  it('should reload list after delete', async () => {
    candidateAPI.delete.mockResolvedValue();
    candidateAPI.getAllPaginated.mockResolvedValue({
      data: {
        content: [{ id: 'candidate1' }, { id: 'candidate2' }],
      },
    });

    await act(async () => {
      wrapper = mount(
        <Router>
          <List />
        </Router>
      );

      await resolvePromises(wrapper);

      candidateAPI.getAllPaginated.mockResolvedValue({
        data: {
          content: [{ id: 'candidate2' }],
        },
      });

      wrapper.find('#candidate1').find(DeleteIcon).simulate('click');

      await resolvePromises(wrapper);

      wrapper
        .find(Dialog)
        .find(DialogActions)
        .find(Button)
        .findWhere((node) => node.text() === 'Excluir')
        .first()
        .simulate('click');

      await resolvePromises(wrapper);
    });

    expect(candidateAPI.getAllPaginated).toHaveBeenCalledTimes(2);
    expect(wrapper.find('#candidate1')).toHaveLength(0);
  });
});
