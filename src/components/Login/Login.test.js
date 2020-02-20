import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

configure({ adapter: new Adapter() });

describe('<Login />', () => {
  it('should render the login button', () => {
    let wrapper = shallow(<Login loginAction={() => {}} />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('Should click the login on the button', () => {
    const mockAction = jest.fn();
    let wrapper = shallow(<Login loginAction={mockAction} />);
    wrapper.find('button').simulate('click');

    expect(mockAction.mock.calls.length).toEqual(1);
  });
});
