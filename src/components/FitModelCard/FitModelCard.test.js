import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FitModelCard from './FitModelCard';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

configure({ adapter: new Adapter() });

describe('<FitModelCard />', () => {
  it('should show card with model info', () => {
    const data = {
      name: 'Test',
      birthday: '08/09/1997',
      genderExpression: 'FEMALE',
      phoneNumber: '(52)99999-9999',
    };

    const wrapper = mount(<FitModelCard {...data} />);

    expect(wrapper.find('#fitModelName').text()).toContain(data.name);
    expect(wrapper.find('#fitModelInfo').text()).toContain(
      'Mulher | 22 anos | (52)99999-9999'
    );
  });

  it('should call on edit function', () => {
    const data = {
      id: 'id',
    };

    const onEdit = jest.fn();

    const wrapper = mount(<FitModelCard {...data} onEdit={onEdit} />);

    wrapper.find(EditIcon).simulate('click');

    expect(onEdit).toBeCalledTimes(1);
    expect(onEdit).toBeCalledWith(data.id);
  });

  it('should call on delete function', () => {
    const data = {
      id: 'id',
    };

    const onDelete = jest.fn();

    const wrapper = mount(<FitModelCard {...data} onDelete={onDelete} />);

    wrapper.find(DeleteIcon).simulate('click');

    expect(onDelete).toBeCalledTimes(1);
    expect(onDelete).toBeCalledWith(data.id);
  });
});
