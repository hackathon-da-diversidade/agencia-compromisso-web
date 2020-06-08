import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Detail from './Detail';
import candidateAPI from '../../api/candidateAPI';
import { MemoryRouter, Route } from 'react-router-dom';
import { resolvePromises } from '../../utils/formHelpers';

jest.mock('../../api/candidateAPI');

configure({ adapter: new Adapter() });

describe('<Detail />', () => {
  it('should call API', async () => {
    candidateAPI.get.mockReturnValue({});

    const match = {
      params: {
        id: '1',
      },
    };

    const location = {
      state: {
        registrationSuccessful: true,
      },
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/candidate/1']}>
        <Route exact path="/candidate/:id">
          <Detail location={location} />
        </Route>
      </MemoryRouter>
    );

    await resolvePromises(wrapper);

    expect(candidateAPI.get).toBeCalledTimes(1);
    expect(candidateAPI.get).toBeCalledWith(match.params.id);
  });
});
