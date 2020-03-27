import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from "./Search";
import fitModelAPI from "../../api/fitModelAPI";

configure({adapter: new Adapter()});

jest.mock('../../api/fitModelAPI');

describe('<Search />', () => {
  it('should search for a model with the given name', () => {
    fitModelAPI.search.mockReturnValue({});

    const name = 'Test';

    const wrapper = mount(< Search />);

    wrapper.find('input[name="searchField"]').simulate('change', {target: {name: 'searchField', value: name}});

    expect(fitModelAPI.search).toBeCalledTimes(1);
    expect(fitModelAPI.search).toBeCalledWith(name);
  })
});
