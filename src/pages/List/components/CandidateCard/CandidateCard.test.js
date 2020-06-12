import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Button from 'components/Button/Button';
import DialogActions from '@material-ui/core/DialogActions';
import CandidateCardComponent from './CandidateCard';
import CandidateForm from '../../../CandidateForm/CandidateForm';
import { act, render, waitFor } from '@testing-library/react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { resolvePromises } from '../../../../utils/formHelpers';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';

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
  let wrapper;

  test('should show card with candidate info', async () => {
    await act(async () => {
      const { getByText } = render(<CandidateCard {...data} />);

      await flushMicroTasks();

      await waitFor(() => expect(getByText(data.name)).toBeVisible());
      await waitFor(() =>
        expect(getByText('Mulher | 22 anos | (52)99999-9999')).toBeVisible()
      );
    });
  });

  test('should redirect to edit page when EditIcon is clicked', async () => {
    await act(async () => {
      wrapper = mount(<CandidateCard {...data} />);

      await resolvePromises(wrapper);

      wrapper.find(EditIcon).first().simulate('click');
    });
  });

  test('should redirect to details page when ArrowForwardIcon is clicked', async () => {
    await act(async () => {
      wrapper = mount(<CandidateCard {...data} />);

      await resolvePromises(wrapper);

      wrapper.find(ArrowForwardIcon).first().simulate('click');
    });
  });

  test('should call on delete function', async () => {
    const data = {
      id: 'id',
    };

    const onDelete = jest.fn();

    await act(async () => {
      wrapper = mount(<CandidateCard {...data} onDelete={onDelete} />);

      await resolvePromises(wrapper);

      wrapper.find(DeleteIcon).simulate('click');
      wrapper
        .find(Dialog)
        .find(DialogActions)
        .find(Button)
        .findWhere((node) => node.text() === 'Excluir')
        .first()
        .simulate('click');

      await resolvePromises(wrapper);
    });

    expect(onDelete).toBeCalledTimes(1);
    expect(onDelete).toBeCalledWith(data.id);
  });
});
