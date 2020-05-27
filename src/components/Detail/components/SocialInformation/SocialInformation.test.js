import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialInformation from './SocialInformation';
import {
  ETHNICITY,
  FAMILY_INCOME,
  HOUSING,
  OCCUPATION_MODE,
} from '../../../../utils/constants';

configure({ adapter: new Adapter() });

describe('<SocialInformation />', () => {
  it('should show detailed user social information', () => {
    const data = {
      ethnicity: 'WHITE',
      housing: 'OWN',
      numberOfResidents: '4',
      occupation: 'Test',
      occupationMode: 'FIXED',
      familyIncome: 'LESS_THAN_ONE_MINIMUM_WAGE',
      numberOfChildren: '2',
    };
    const wrapper = mount(<SocialInformation data={data} />);

    expect(wrapper.find('#ethnicity').text()).toContain(
      ETHNICITY[data.ethnicity]
    );
    expect(wrapper.find('#housing').text()).toContain(HOUSING[data.housing]);
    expect(wrapper.find('#numberOfResidents').text()).toContain(
      data.numberOfResidents
    );
    expect(wrapper.find('#occupation').text()).toContain(data.occupation);
    expect(wrapper.find('#occupationMode').text()).toContain(
      OCCUPATION_MODE[data.occupationMode]
    );
    expect(wrapper.find('#familyIncome').text()).toContain(
      FAMILY_INCOME[data.familyIncome]
    );
    expect(wrapper.find('#numberOfChildren').text()).toContain(
      data.numberOfChildren
    );
  });
});
