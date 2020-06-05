import React from 'react';
import { configure, mount } from 'enzyme';
import { BrowserRouter as Router, MemoryRouter, Route } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import fitModelAPI from '../../api/fitModelAPI';
import FitModelForm from './FitModelForm';
import {
  fillInput,
  fillSelect,
  fillTextarea,
  resolvePromises,
} from '../../utils/formHelpers';
import flushMicroTasks from '@testing-library/react-hooks/lib/flush-microtasks';
import { render, waitFor } from '@testing-library/react';

jest.mock('../../api/fitModelAPI');

configure({ adapter: new Adapter() });

beforeEach(() => jest.clearAllMocks());

describe('<FitModelForm />', () => {
  it('should show default fields', async () => {
    fitModelAPI.create.mockReturnValue({});

    const props = {
      match: {
        params: {
          id: '',
        },
      },
    };

    const data = {
      name: 'Name',
      birthday: '00/00/0000',
      availability: 'availability',
      inProjects: 'inProjects',
      projects: null,
      phoneNumber: '0000000000000',
      address: 'address',
      genderExpression: 'genderExpression',
      identifyAsLGBTQIA: 'identifyAsLGBTQIA',
      education: 'education',
      notes: 'notes',
      sizes: {
        totalBustCircumference: 'totalBustCircumference',
        totalWaistCircumference: 'totalWaistCircumference',
        totalHipCircumference: 'totalHipCircumference',
        height: 'height',
        shirtSize: 'M',
        pantsSize: 42,
        shoeSize: '40',
      },
      socialInformation: {
        ethnicity: 'ethnicity',
        housing: 'housing',
        numberOfResidents: 'numberOfResidents',
        occupation: 'occupation',
        occupationMode: 'occupationMode',
        familyIncome: 'familyIncome',
        hasChildren: 'no',
        numberOfChildren: null,
      },
    };

    const wrapper = mount(
      <Router>
        <FitModelForm {...props} />
      </Router>
    );

    await resolvePromises(wrapper);

    fillInput(wrapper, data.name, 'name');
    fillInput(wrapper, data.birthday, 'birthday');
    fillInput(wrapper, data.availability, 'availability');
    fillInput(wrapper, data.inProjects, 'inProjects');
    fillInput(wrapper, data.phoneNumber, 'phoneNumber');
    fillInput(wrapper, data.address, 'address');
    fillSelect(wrapper, data.genderExpression, 'genderExpression');
    fillInput(wrapper, data.identifyAsLGBTQIA, 'identifyAsLGBTQIA');
    fillSelect(wrapper, data.education, 'education');
    fillTextarea(wrapper, data.notes, 'notes');

    wrapper.find('#measuresTab').first().simulate('click');

    fillInput(
      wrapper,
      data.sizes.totalBustCircumference,
      'totalBustCircumference'
    );
    fillInput(
      wrapper,
      data.sizes.totalWaistCircumference,
      'totalWaistCircumference'
    );
    fillInput(
      wrapper,
      data.sizes.totalHipCircumference,
      'totalHipCircumference'
    );
    fillInput(wrapper, data.sizes.height, 'height');
    fillInput(wrapper, data.sizes.shirtSize, 'shirtSize');
    fillInput(wrapper, data.sizes.pantsSize, 'pantsSize');
    fillInput(wrapper, data.sizes.shoeSize, 'shoeSize');

    wrapper.find('#socialTab').first().simulate('click');

    fillSelect(wrapper, data.socialInformation.ethnicity, 'ethnicity');
    fillInput(wrapper, data.socialInformation.housing, 'housing');
    fillInput(
      wrapper,
      data.socialInformation.numberOfResidents,
      'numberOfResidents'
    );
    fillInput(wrapper, data.socialInformation.occupation, 'occupation');
    fillInput(wrapper, data.socialInformation.occupationMode, 'occupationMode');
    fillSelect(wrapper, data.socialInformation.familyIncome, 'familyIncome');
    fillInput(wrapper, data.socialInformation.hasChildren, 'hasChildren');

    wrapper.find('#saveButton').simulate('click');

    await resolvePromises(wrapper);

    expect(fitModelAPI.create).toBeCalledTimes(1);
    expect(fitModelAPI.create).toBeCalledWith(data);
  });

  it('should load fit model data to edit', async () => {
    fitModelAPI.get.mockReturnValue({});

    const props = {
      match: {
        params: {
          id: 'id',
        },
      },
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/cadastro/id']}>
        <Route exact path="/cadastro/:id">
          <FitModelForm {...props} />
        </Route>
      </MemoryRouter>
    );

    await resolvePromises(wrapper);

    expect(fitModelAPI.get).toBeCalledTimes(1);
    expect(fitModelAPI.get).toBeCalledWith(props.match.params.id);
  });
});

test('should call update when editing', async () => {
  const data = {
    name: 'Name',
    birthday: '00/00/0000',
    availability: 'availability',
    inProjects: 'inProjects',
    projects: null,
    phoneNumber: '0000000000000',
    address: 'address',
    genderExpression: 'genderExpression',
    identifyAsLGBTQIA: 'identifyAsLGBTQIA',
    education: 'education',
    notes: 'notes',
    sizes: {
      totalBustCircumference: 'totalBustCircumference',
      totalWaistCircumference: 'totalWaistCircumference',
      totalHipCircumference: 'totalHipCircumference',
      height: 'height',
      shirtSize: 'M',
      pantsSize: 42,
      shoeSize: '40',
    },
    socialInformation: {
      ethnicity: 'ethnicity',
      housing: 'housing',
      numberOfResidents: 'numberOfResidents',
      occupation: 'occupation',
      occupationMode: 'occupationMode',
      familyIncome: 'familyIncome',
      hasChildren: 'no',
      numberOfChildren: null,
    },
  };

  fitModelAPI.get.mockReturnValue({ data });
  fitModelAPI.update.mockReturnValue({});

  const props = {
    match: {
      params: {
        id: 'id',
      },
    },
  };

  const { getByText } = render(
    <MemoryRouter initialEntries={['/cadastro/id']}>
      <Route exact path="/cadastro/:id">
        <FitModelForm {...props} />
      </Route>
    </MemoryRouter>
  );

  const save = await waitFor(() => getByText('Salvar'));
  save.click();

  await flushMicroTasks();

  expect(fitModelAPI.update).toBeCalledTimes(1);
  expect(fitModelAPI.update).toBeCalledWith(data);
});
