import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MeasuresInformation from './MeasuresInformation';

describe('<MeasuresInformation />', () => {
  it('should show detailed user measure information', () => {
    const data = {
      totalBustCircumference: '180',
      totalWaistCircumference: '180',
      totalHipCircumference: '180',
      height: '173',
      shirtSize: 'M',
      pantsSize: '42',
      shoeSize: '40',
    };
    const wrapper = mount(<MeasuresInformation data={data} />);

    expect(wrapper.find('#totalBustCircumference').text()).toContain(
      data.totalBustCircumference
    );
    expect(wrapper.find('#totalWaistCircumference').text()).toContain(
      data.totalWaistCircumference
    );
    expect(wrapper.find('#totalHipCircumference').text()).toContain(
      data.totalHipCircumference
    );
    expect(wrapper.find('#height').text()).toContain(data.height);
    expect(wrapper.find('#shirtSize').text()).toContain(data.shirtSize);
    expect(wrapper.find('#pantsSize').text()).toContain(data.pantsSize);
    expect(wrapper.find('#shoeSize').text()).toContain(data.shoeSize);
  });
});
