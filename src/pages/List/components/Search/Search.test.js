import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import candidateAPI from 'api/candidateAPI';

jest.mock('api/candidateAPI');

describe('<Search />', () => {
  const fakeDebounceTime = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  it('should call onChange with typed name with debounce time', async () => {
    const name = 'Test';

    let onChange = jest.fn();

    const wrapper = mount(<Search onChange={onChange} />);

    wrapper
      .find('input[name="searchField"]')
      .simulate('change', { target: { name: 'searchField', value: name } });

    await fakeDebounceTime(500);
    expect(onChange).toBeCalledTimes(0);

    await fakeDebounceTime(1000);
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(name);
  });
});
