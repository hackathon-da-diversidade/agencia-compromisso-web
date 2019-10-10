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

     it('should have income <NumberField />', () => {
        let field = wrapper.find("NumberField[name='income']");
        expect(field).toHaveLength(1);
     });

     it('should have children <NumberField />', () => {
        let field = wrapper.find("NumberField[name='children']");
        expect(field).toHaveLength(1);
     });

     it('should have housing <SelectField />', () => {
        let field = wrapper.find("SelectField[name='housing']");
        expect(field).toHaveLength(1);
     });

     it('should have lgbtqia <CheckboxField />', () => {
        let field = wrapper.find("CheckboxField[name='lgbtqia']");
        expect(field).toHaveLength(1);
     });

     it('should have comments <TextField />', () => {
        let field = wrapper.find("TextField[name='comments']");
        expect(field).toHaveLength(1);
     });
    
});
