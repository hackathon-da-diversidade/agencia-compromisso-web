import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialForm from './SocialForm';

configure({adapter: new Adapter()})

describe('<SocialForm />', () => {
    let wrapper;

    it('should show default fields', () => {
      wrapper = mount(<SocialForm />);

       expect(wrapper.find("TextField[name='job']")).toHaveLength(1);
       expect(wrapper.find("SelectField[name='schooling']")).toHaveLength(1);
       expect(wrapper.find("SelectField[name='race']")).toHaveLength(1);
       expect(wrapper.find("NumberField[name='people']")).toHaveLength(1);
       expect(wrapper.find("NumberField[name='income']")).toHaveLength(1);
       expect(wrapper.find("NumberField[name='children']")).toHaveLength(1);
       expect(wrapper.find("SelectField[name='housing']")).toHaveLength(1);
       expect(wrapper.find("CheckboxField[name='lgbtqia']")).toHaveLength(1);
       expect(wrapper.find("TextField[name='comments']")).toHaveLength(1);
    });
    
});
