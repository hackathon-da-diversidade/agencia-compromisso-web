import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Measures from './Measures';

configure({adapter: new Adapter()})

describe('<Measures />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Measures />);
    });

    it('should have bust field', () => {
        let field = wrapper.find("IntegerField[name='bust']");
        expect(field).toHaveLength(1);
    });

    it('should have waist field', () => {
        let field = wrapper.find("IntegerField[name='waist']");
        expect(field).toHaveLength(1);
    });

    it('should have hip field', () => {
        let field = wrapper.find("IntegerField[name='hip']");
        expect(field).toHaveLength(1);
    });

    it('should have bust height', () => {
        let field = wrapper.find("IntegerField[name='height']");
        expect(field).toHaveLength(1);
    });
});
