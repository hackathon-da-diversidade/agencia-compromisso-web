import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Formik } from 'formik'
import SelectField from './SelectField';

configure({adapter: new Adapter()})

describe('<SelectField />', () => {

    it('should render one component <SelectField /> with the provided <option/> fields', () => {
        let wrapper = mount(<Formik>
                              <SelectField options={[
                                {label:'Test 01', value: 'test1'},
                                {label:'Test 02', value: 'test2'},
                                {label:'Test 03', value: 'test3'},
                              ]} />
                            </Formik>);
        let options = wrapper.find("option");
        expect(options).toHaveLength(3);
    });

});
