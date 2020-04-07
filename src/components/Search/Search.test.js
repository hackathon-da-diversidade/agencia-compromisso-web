import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from './Search';
import fitModelAPI from '../../api/fitModelAPI';

configure({ adapter: new Adapter() });

jest.mock('../../api/fitModelAPI');

describe('<Search />', () => {
  const fakeDebounceTime = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  it('should return model on search of valid model name', async () => {
    const fitModels = [
      {
        id: '5e825a1d6d058825e13b1dc7',
        name: 'Test',
        birthday: '08/09/1999',
        phoneNumber: '(99)999999999',
        genderExpression: 'MALE',
      },
    ];

    const name = 'Test';

    let onChange = jest.fn();
    let onError = () => {
    };

    fitModelAPI.search.mockReturnValue({ data: { content: fitModels } });

    const wrapper = mount(<Search onChange={onChange} onError={onError}/>);

    wrapper.find('input[name="searchField"]').simulate('change', { target: { name: 'searchField', value: name } });

    await fakeDebounceTime(1000);

    expect(fitModelAPI.search).toBeCalledTimes(1);
    expect(fitModelAPI.search).toBeCalledWith(name);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(fitModels);
  });

  it('should return error on search error', async () => {
    const name = 'Test';

    let onChange = () => {
    };
    let onError = jest.fn();

    fitModelAPI.search.mockReturnValue();

    const wrapper = mount(<Search onChange={onChange} onError={onError}/>);

    wrapper.find('input[name="searchField"]').simulate('change', { target: { name: 'searchField', value: name } });

    await fakeDebounceTime(1000);

    expect(onError).toBeCalledTimes(1);
    expect(onError).toBeCalledWith();
  })
});
