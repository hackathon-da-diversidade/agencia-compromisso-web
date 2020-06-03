import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Detail from './Detail';
import fitModelAPI from '../../api/fitModelAPI';
import { MemoryRouter, Route } from 'react-router-dom';
import { resolvePromises } from '../../utils/formHelpers';

jest.mock('../../api/fitModelAPI');

configure({ adapter: new Adapter() });

describe('<Detail />', () => {
  it('should call API', async () => {
    fitModelAPI.get.mockReturnValue({});

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
      <MemoryRouter initialEntries={['/modelo/1']}>
        <Route exact path="/modelo/:id">
          <Detail location={location} />
        </Route>
      </MemoryRouter>
    );

    await resolvePromises(wrapper);

    expect(fitModelAPI.get).toBeCalledTimes(1);
    expect(fitModelAPI.get).toBeCalledWith(match.params.id);
  });
});
