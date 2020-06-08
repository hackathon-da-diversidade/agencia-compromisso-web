import React from 'react';
import { configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import CandidateCardComponent from './CandidateCard';

configure({ adapter: new Adapter() });

const CandidateCard = props => (
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
});
