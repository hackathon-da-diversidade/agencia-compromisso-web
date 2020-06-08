import React from 'react';
import Detail from './Detail';
import candidateAPI from '../../api/candidateAPI';
import { MemoryRouter, Route } from 'react-router-dom';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';

jest.mock('../../api/candidateAPI');

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

    await flushMicroTasks();
    expect(candidateAPI.get).toBeCalledTimes(1);
    expect(candidateAPI.get).toBeCalledWith('1');
  });
});
