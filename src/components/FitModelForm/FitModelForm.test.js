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
import { act, render, waitFor } from '@testing-library/react';
import * as ReactFire from 'reactfire';

jest.mock('../../api/fitModelAPI');

configure({ adapter: new Adapter() });

beforeEach(() => jest.clearAllMocks());

describe('<FitModelForm />', () => {
  const put = jest.fn();
  const listAll = jest.fn().mockReturnValue({ items: [] });
  const ref = jest.fn().mockReturnValue({ put, listAll });
  const useStorage = jest.fn().mockReturnValue({ ref });

  ReactFire['useStorage'] = useStorage;

  it('should show default fields', async () => {
    fitModelAPI.create.mockReturnValue({
      headers: { location: '/candidate/id' },
    });

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

    let wrapper = null;

    await act(async () => {
      wrapper = mount(
        <Router>
          <FitModelForm {...props} />
        </Router>
      );

      await resolvePromises(wrapper);
    });

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

    // Photos Tab

    wrapper.find('#tab-1').first().simulate('click');

    const fileName = 'image.png';
    const file = new File(['(⌐□_□)'], fileName, { type: 'image/png' });

    global.URL.createObjectURL = jest.fn().mockReturnValue(fileName);

    wrapper
      .find('input[type="file"]')
      .simulate('change', { target: { files: [file] } });

    // Photos Tab End

    wrapper.find('#tab-2').first().simulate('click');

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

    wrapper.find('#tab-3').first().simulate('click');

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

    expect(useStorage).toHaveBeenCalled();
    expect(ref).toHaveBeenCalledWith(`photos/id/${fileName}`);
    expect(put).toHaveBeenCalledWith(file);
    expect(fitModelAPI.create).toBeCalledTimes(1);
    expect(fitModelAPI.create).toBeCalledWith(data);
  });

  test('should load fit model data to edit', async () => {
    fitModelAPI.get.mockReturnValue({ data: {} });

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/cadastro/id']}>
          <Route exact path="/cadastro/:id">
            <FitModelForm />
          </Route>
        </MemoryRouter>
      );

      await flushMicroTasks();
    });

    expect(useStorage).toHaveBeenCalled();
    expect(ref).toHaveBeenCalledWith(`photos/id`);
    expect(listAll).toHaveBeenCalled();
    expect(fitModelAPI.get).toBeCalledTimes(1);
    expect(fitModelAPI.get).toBeCalledWith('id');
  });

  test('should call update when editing', async () => {
    const data = {
      id: 'id',
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
    fitModelAPI.update.mockReturnValue({ data: { id: 'id' } });

    await act(async () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/cadastro/id']}>
          <Route exact path="/cadastro/:id">
            <FitModelForm />
          </Route>
        </MemoryRouter>
      );

      await flushMicroTasks();
      await flushMicroTasks();

      const save = await waitFor(() => getByText('Salvar'));
      save.click();
    });

    expect(fitModelAPI.update).toBeCalledTimes(1);
    expect(fitModelAPI.update).toBeCalledWith(data);
  });
});
