import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

describe('<Header />', () => {
  it('should render one component <Header />', () => {
    let wrapper = shallow(<Header />);
    expect(wrapper.find('.Header')).toHaveLength(1);
    expect(wrapper.find('.HeaderIcon')).toHaveLength(1);
    expect(wrapper.find('.HeaderBack')).toHaveLength(1);
    expect(wrapper.find('.HeaderBack').prop('to')).toBe('/');
  });

  it('should render one component <Header /> with Title', () => {
    let wrapper = shallow(<Header title="This is a test" />);
    let headerTitle = wrapper.find('.HeaderTitle');
    expect(headerTitle).toHaveLength(1);
    expect(headerTitle.text()).toBe('This is a test');
  });
});
