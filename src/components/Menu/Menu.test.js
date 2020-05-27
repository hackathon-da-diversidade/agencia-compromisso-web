import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './Menu';
import AuthenticationAPI from '../../api/authenticationAPI';

jest.mock('../../api/authenticationAPI');

configure({ adapter: new Adapter() });

describe('<Menu />', () => {
  it('should show menu items', () => {
    const wrapper = mount(<Menu />);

    expect(wrapper.text()).toContain('Cadastro');
    expect(wrapper.text()).toContain('Lista');
    expect(wrapper.text()).toContain('Sair');
  });

  it('should call API when click "Sair"', () => {
    AuthenticationAPI.logout.mockReturnValue({});

    const wrapper = mount(<Menu />);

    wrapper.find('#logout').simulate('click');

    expect(AuthenticationAPI.logout).toBeCalledTimes(1);
  });
});
