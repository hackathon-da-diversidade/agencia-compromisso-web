import React from 'react';

import { configure, mount } from 'enzyme';
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
        wrapper = mount(<Cadastro />);
    });

    it('should render one component <Header /> with a correct Title', () => {
        let header = wrapper.find(Header);
        expect(header).toHaveLength(1);
        expect(header.find(".HeaderTitle").text()).toBe("Cadastro");
    });

    it('should render one component <DadosBasicos />', () => {
        expect(wrapper.find(DadosBasicos)).toHaveLength(1);
    });

    it('should render one component <Medidas />', () => {
        expect(wrapper.find(Medidas)).toHaveLength(1);
    });

    it('should render one component <Social />', () => {
        expect(wrapper.find(Social)).toHaveLength(1);
    });
});
