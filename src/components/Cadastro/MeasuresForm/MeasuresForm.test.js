import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MeasuresForm from './MeasuresForm';

configure({adapter: new Adapter()})

describe('<MeasuresForm />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<MeasuresForm />);
    });

    it('should have bust <NumberField />', () => {
        let field = wrapper.find("NumberField[name='bust']");
        expect(field).toHaveLength(1);
    });

    it('should have waist <NumberField />', () => {
        let field = wrapper.find("NumberField[name='waist']");
        expect(field).toHaveLength(1);
    });

    it('should have hip <NumberField />', () => {
        let field = wrapper.find("NumberField[name='hip']");
        expect(field).toHaveLength(1);
    });

    it('should have height <NumberField />', () => {
        let field = wrapper.find("NumberField[name='height']");
        expect(field).toHaveLength(1);
    });
});
