import React from 'react';
import { configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Adapter from 'enzyme-adapter-react-16';
import Dialog from '@material-ui/core/Dialog';
import Button from 'components/Button/Button';

import DialogActions from '@material-ui/core/DialogActions';

import CandidateCardComponent from './CandidateCard';

configure({ adapter: new Adapter() });

const CandidateCard = (props) => (
  <MemoryRouter>
    <CandidateCardComponent {...props} />
  </MemoryRouter>
);

const data = {
  id: 1,
  name: 'Test',
  birthday: '08/09/1997',
  genderExpression: 'FEMALE',
  phoneNumber: '(52)99999-9999',
};

describe('<CandidateCard />', () => {
  it('should show card with candidate info', () => {
    const wrapper = mount(<CandidateCard {...data} />);

    expect(wrapper.find('#candidateName').text()).toContain(data.name);
    expect(wrapper.find('#candidateInfo').text()).toContain(
      'Mulher | 22 anos | (52)99999-9999'
    );
  });

  it('should redirect to edit page when EditIcon is clicked', async () => {
    const wrapper = mount(<CandidateCard {...data} />);
    const link = wrapper.find('#link-edit').first();

    expect(link.props().to).toBe('/cadastro/1');
  });

  it('should redirect to details page when ArrowForwardIcon is clicked', async () => {
    const wrapper = mount(<CandidateCard {...data} />);
    const link = wrapper.find('#link-details').first();

    expect(link.props().to).toBe('/candidato/1');
  });

  it('should call on delete function', () => {
    const data = {
      id: 'id',
    };

    const onDelete = jest.fn();

    const wrapper = mount(<CandidateCard {...data} onDelete={onDelete} />);

    wrapper.find(DeleteIcon).simulate('click');
    wrapper
      .find(Dialog)
      .find(DialogActions)
      .find(Button)
      .findWhere((node) => node.text() === 'Excluir')
      .first()
      .simulate('click');

    expect(onDelete).toBeCalledTimes(1);
    expect(onDelete).toBeCalledWith(data.id);
  });
});
