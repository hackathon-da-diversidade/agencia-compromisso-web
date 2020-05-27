import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PersonalInformation from './PersonalInformation';

configure({ adapter: new Adapter() });

describe('<PersonalInformation />', () => {
  it('should show detailed user personal information', () => {
    const data = {
      birthday: '08/08/1999',
      availability: 'AFTERNOON',
      projects: 'project',
      phoneNumber: '999999999',
      address: 'Rua dos Limoeiros',
      identifyAsLGBTQIA: true,
    };
    const wrapper = mount(<PersonalInformation data={data}/>);

    expect(wrapper.find('#birthday').text()).toContain(data.birthday);
    expect(wrapper.find('#availability').text()).toContain(
      'Disponibilidade:Tarde',
    );
    expect(wrapper.find('#projects').text()).toContain(data.projects);
    expect(wrapper.find('#phoneNumber').text()).toContain(data.phoneNumber);
    expect(wrapper.find('#address').text()).toContain(data.address);
    expect(wrapper.find('#identifyAsLGBTQIA').text()).toContain(
      'Pertence à comunidade LGBTQIA+:Sim',
    );
  });

  it('should show identify as LGBTQIA as "Não"', () => {
    const data = {
      identifyAsLGBTQIA: false,
    };
    const wrapper = mount(<PersonalInformation data={data}/>);

    expect(wrapper.find('#identifyAsLGBTQIA').text()).toContain(
      'Pertence à comunidade LGBTQIA+:Não',
    );
  });
});
