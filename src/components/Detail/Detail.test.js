import React from 'react';
import Detail from './Detail';
import fitModelAPI from '../../api/fitModelAPI';
import { MemoryRouter, Route } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';

jest.mock('../../api/fitModelAPI');

test('loads and display detail', async () => {
  fitModelAPI.get.mockReturnValue({ name: 'Name' });

  const location = {
    state: {
      registrationSuccessful: true,
    },
  };

  await act(async () => {
    render(
      <MemoryRouter initialEntries={['/modelo/1']}>
        <Route exact path="/modelo/:id">
          <Detail location={location} />
        </Route>
      </MemoryRouter>
    );

    await flushMicroTasks();
  });

  expect(fitModelAPI.get).toBeCalledTimes(1);
  expect(fitModelAPI.get).toBeCalledWith('1');
});
