import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MeasuresForm from './MeasuresForm';

configure({ adapter: new Adapter() });

describe('<MeasuresForm />', () => {
  let wrapper;

  it('should show default fields', () => {
    wrapper = mount(<MeasuresForm />);

    expect(
      wrapper.find("NumberField[name='totalBustCircumference']")
    ).toHaveLength(1);
    expect(
      wrapper.find("NumberField[name='totalWaistCircumference']")
    ).toHaveLength(1);
    expect(
      wrapper.find("NumberField[name='totalHipCircumference']")
    ).toHaveLength(1);
    expect(wrapper.find("NumberField[name='height']")).toHaveLength(1);
    expect(wrapper.find("#shirtSize")).toHaveLength(1);
    expect(wrapper.find("#shoeSize")).toHaveLength(1);
  });
});
