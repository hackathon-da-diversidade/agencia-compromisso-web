import React from 'react';
import Detail from './Detail';
import candidateAPI from '../../api/candidateAPI';
import { MemoryRouter, Route } from 'react-router-dom';
import { act, render } from '@testing-library/react';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';
import * as ReactFire from 'reactfire';

jest.mock('../../api/candidateAPI');

describe('<Detail />', () => {
  const listAll = jest.fn().mockReturnValue({ items: [] });
  const ref = jest.fn().mockReturnValue({ listAll });
  const useStorage = jest.fn().mockReturnValue({ ref });

  ReactFire['useStorage'] = useStorage;

  test('should call API', async () => {
    candidateAPI.get.mockReturnValue({ data: { name: '' } });

    const location = {
      state: {
        registrationSuccessful: true,
      },
    };

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/candidate/1']}>
          <Route exact path="/candidate/:id">
            <Detail location={location} />
          </Route>
        </MemoryRouter>
      );

      await flushMicroTasks();
      await flushMicroTasks();
    });

    expect(useStorage).toHaveBeenCalled();
    expect(candidateAPI.get).toBeCalledTimes(1);
    expect(candidateAPI.get).toBeCalledWith('1');
    expect(ref).toHaveBeenCalledWith(`photos/1`);
    expect(listAll).toHaveBeenCalled();
  });
});
