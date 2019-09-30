import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Cadastro from './Cadastro';
import DadosBasicos from './DadosBasicos/DadosBasicos';
import Medidas from './Medidas/Medidas';
import Social from './Social/Social';
import Header from '../Header';

configure({adapter: new Adapter()})

describe('<Cadastro />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Cadastro />);
    });

    it('should render one component <Header /> with Cadastro as the title', () => {
        let header = wrapper.find(Header);
        expect(header).toHaveLength(1);
        expect(header.prop("title")).toBe("Cadastro");
    });

    it('should start rendering one component <DadosBasicos />', () => {
        expect(wrapper.find(DadosBasicos)).toHaveLength(1);
        expect(wrapper.find(Medidas)).toHaveLength(0);
        expect(wrapper.find(Social)).toHaveLength(0);
    });

    it('should switch tab and render one component <Medidas />', () => {
        wrapper.setState({selectedTabIndex: 1});
        expect(wrapper.find(DadosBasicos)).toHaveLength(0);
        expect(wrapper.find(Medidas)).toHaveLength(1);
        expect(wrapper.find(Social)).toHaveLength(0);
    });

    it('should switch tab and render one component <Social />', () => {
        wrapper.setState({selectedTabIndex: 2});
        expect(wrapper.find(DadosBasicos)).toHaveLength(0);
        expect(wrapper.find(Medidas)).toHaveLength(0);
        expect(wrapper.find(Social)).toHaveLength(1);
    });

});
