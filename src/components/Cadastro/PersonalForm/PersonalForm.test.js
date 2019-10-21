import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PersonalForm from './PersonalForm';

configure({adapter: new Adapter()})

describe('<PersonalForm />', () => {
    let wrapper;

    it('should show default fields', () => {
        wrapper = mount(<PersonalForm />);

        expect(wrapper.find("TextField[name='name']")).toHaveLength(1);
        expect(wrapper.find("EmailField[name='email']")).toHaveLength(1);
        expect(wrapper.find("PhoneField[name='phoneNumber']")).toHaveLength(1);
        expect(wrapper.find("SelectField[name='gender']")).toHaveLength(1);
        expect(wrapper.find("DateField[name='birth']")).toHaveLength(1);

        expect(wrapper.find("TextField[name='address']")).toHaveLength(1);
        expect(wrapper.find("NumberField[name='addressNumber']")).toHaveLength(1);
        expect(wrapper.find("TextField[name='addressComplement']")).toHaveLength(1);
        expect(wrapper.find("TextField[name='neighborhood']")).toHaveLength(1);
        expect(wrapper.find("MaskedField[name='zipCode']")).toHaveLength(1);
        expect(wrapper.find("TextField[name='city']")).toHaveLength(1);
        expect(wrapper.find("TextField[name='country']")).toHaveLength(1);
    });

    it('should not show guardian related fields for models over 18', () => {
        wrapper = mount(<PersonalForm />);

        expect(wrapper.find("TextField[name='guardianName']")).toHaveLength(0);
        expect(wrapper.find("DateField[name='guardianBirth']")).toHaveLength(0);
        expect(wrapper.find("EmailField[name='guardianEmail']")).toHaveLength(0);
        expect(wrapper.find("PhoneField[name='guardianPhoneNumber']")).toHaveLength(0);
    });

    it('should show guardian related fields for underage models', () => {
        let data = {
            birth: new Date()
        };
        wrapper = mount(<PersonalForm data={data} />);

        expect(wrapper.find("TextField[name='guardianName']")).toHaveLength(1);
        expect(wrapper.find("DateField[name='guardianBirth']")).toHaveLength(1);
        expect(wrapper.find("EmailField[name='guardianEmail']")).toHaveLength(1);
        expect(wrapper.find("PhoneField[name='guardianPhoneNumber']")).toHaveLength(1);
    });



});
