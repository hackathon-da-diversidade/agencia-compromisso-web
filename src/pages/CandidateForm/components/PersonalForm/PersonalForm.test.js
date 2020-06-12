import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PersonalForm from './PersonalForm';

describe('<PersonalForm />', () => {
  let wrapper;

  it('should show default fields', () => {
    wrapper = mount(<PersonalForm />);

    expect(wrapper.find("TextField[name='name']")).toHaveLength(1);
    expect(wrapper.find("MaskedField[name='phoneNumber']")).toHaveLength(1);
    expect(wrapper.find("SelectField[name='genderExpression']")).toHaveLength(
      1
    );
    expect(wrapper.find("MaskedField[name='birthday']")).toHaveLength(1);

    expect(wrapper.find("TextField[name='address']")).toHaveLength(1);
  });

  it('should not show guardian related fields for candidates over 18', () => {
    wrapper = mount(<PersonalForm />);

    expect(wrapper.find("TextField[name='guardianName']")).toHaveLength(0);
    expect(
      wrapper.find("MaskedField[name='guardianPhoneNumber']")
    ).toHaveLength(0);
  });

  it('should show guardian related fields for underage candidates', () => {
    let data = {
      birthday: '22/08/' + new Date().getFullYear(),
    };
    wrapper = mount(<PersonalForm data={data} />);

    expect(wrapper.find("TextField[name='guardianName']")).toHaveLength(1);
    expect(
      wrapper.find("MaskedField[name='guardianPhoneNumber']")
    ).toHaveLength(1);
  });
});
