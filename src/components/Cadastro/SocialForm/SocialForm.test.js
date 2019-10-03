import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialForm from './SocialForm';

configure({adapter: new Adapter()})

describe('<SocialForm />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SocialForm />);
    });

    it('should have job <TextField />', () => {
       let field = wrapper.find("TextField[name='job']");
       expect(field).toHaveLength(1);
    });

    it('should have schooling <SelectField />', () => {
        let field = wrapper.find("SelectField[name='schooling']");
        expect(field).toHaveLength(1);
     });

     it('should have race <SelectField />', () => {
        let field = wrapper.find("SelectField[name='race']");
        expect(field).toHaveLength(1);
     });

     it('should have people <NumberField />', () => {
        let field = wrapper.find("NumberField[name='people']");
        expect(field).toHaveLength(1);
     });

});
