import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DadosBasicos from './DadosBasicos';
import Input from './../../UI/Input/Input';

configure({adapter: new Adapter()})


describe('<DadosBasicos />', () => {
    let wrapper;
    beforeEach(() => {
        //wrapper = shallow(<DadosBasicos />);
    });

    it('should not render <Input /> given empty form', () => {
       // expect(wrapper.find(Input)).toHaveLength(0);
    });

/*
    it('should ', () => {
        wrapper.setProps({
            data: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                      type: 'text',
                      label: 'Nome'
                    },
                    value: '',
                    validation: {
                      required: true
                    },
                    valid: false,
                    touched: false
                  },
                  birth: {
                    elementType: 'input',
                    elementConfig: {
                      type: 'number',
                      label: 'Idade'
                    },
                    value: '',
                    validation: {
                      required: true
                    },
                    valid: false,
                    touched: false
                  }
            }
        });
        expect(wrapper.find(Input)).toHaveLength(2);
    });
    */
});
