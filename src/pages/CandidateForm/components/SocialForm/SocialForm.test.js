import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialForm from './SocialForm';

describe('<SocialForm />', () => {
  let wrapper;

  it('should show default fields', () => {
    wrapper = mount(<SocialForm />);

    expect(wrapper.find("SelectField[name='ethnicity']")).toHaveLength(1);
    expect(wrapper.find("CheckboxField[name='housing']")).toHaveLength(1);
    expect(wrapper.find("NumberField[name='numberOfResidents']")).toHaveLength(
      1
    );
    expect(wrapper.find("TextField[name='occupation']")).toHaveLength(1);
    expect(wrapper.find("CheckboxField[name='occupationMode']")).toHaveLength(
      1
    );
    expect(wrapper.find("SelectField[name='familyIncome']")).toHaveLength(1);
    expect(wrapper.find("CheckboxField[name='hasChildren']")).toHaveLength(1);
  });
});
