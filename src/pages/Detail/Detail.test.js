import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';
import { resolvePromises } from 'utils/formHelpers';
import Detail from './Detail';
import candidateAPI from 'api/candidateAPI';

jest.mock('api/candidateAPI');

describe('<Detail />', () => {
  it('should call API', async () => {
    candidateAPI.get.mockReturnValue({ data: { name: 'Name' } });
    const location = {
      state: {
        registrationSuccessful: true,
      },
    };

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/candidato/1']}>
          <Route exact path="/candidato/:id">
            <Detail location={location} />
          </Route>
        </MemoryRouter>
      );
      await resolvePromises();
    });

    expect(candidateAPI.get).toBeCalledTimes(1);
    expect(candidateAPI.get).toBeCalledWith('1');
  });
});
