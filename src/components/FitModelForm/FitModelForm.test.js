import React from 'react';
import { configure, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import fitModelAPI from '../../api/fitModelAPI';
import FitModelForm from './FitModelForm';

jest.mock('../../api/fitModelAPI');

configure({ adapter: new Adapter() });

beforeEach(() => jest.clearAllMocks());

const fillInputs = (wrapper, value, id) => {
  wrapper.find(`input[name=\'${id}\']`)
    .first()
    .simulate('change', { target: { name: id, value: value } } );
};

describe('<FitModelForm />', () => {
  it('should show default fields', () => {
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

    fillInputs(wrapper, data.name, 'name');
    fillInputs(wrapper, data.birthday, 'birthday');
    fillInputs(wrapper, data.availability, 'availability');
    fillInputs(wrapper, data.inProjects, 'inProjects');
    fillInputs(wrapper, data.phoneNumber, 'phoneNumber');
    fillInputs(wrapper, data.address, 'address');

    wrapper.find("select[name='genderExpression']").simulate('change', {
      target: {
        name: 'genderExpression',
        value: data.genderExpression,
      },
    });

    fillInputs(wrapper, data.identifyAsLGBTQIA, 'identifyAsLGBTQIA');

    wrapper.find("select[name='education']").simulate('change', {
      target: {
        name: 'education',
        value: data.education,
      },
    });
    wrapper
      .find("textarea[name='notes']")
      .simulate('change', { target: { name: 'notes', value: data.notes } });

    wrapper
      .find('#measuresTab')
      .first()
      .simulate('click');

    fillInputs(wrapper, data.sizes.totalBustCircumference, 'totalBustCircumference');
    fillInputs(wrapper, data.sizes.totalWaistCircumference, 'totalWaistCircumference');
    fillInputs(wrapper, data.sizes.totalHipCircumference, 'totalHipCircumference');
    fillInputs(wrapper, data.sizes.height, 'height');
    fillInputs(wrapper, data.sizes.shirtSize, 'shirtSize');
    fillInputs(wrapper, data.sizes.pantsSize, 'pantsSize');
    fillInputs(wrapper, data.sizes.shoeSize, 'shoeSize');

    wrapper
      .find('#socialTab')
      .first()
      .simulate('click');

    wrapper.find("select[name='ethnicity']").simulate('change', {
      target: {
        name: 'ethnicity',
        value: data.socialInformation.ethnicity,
      },
    });

    fillInputs(wrapper, data.socialInformation.housing, 'housing');
    fillInputs(wrapper, data.socialInformation.numberOfResidents, 'numberOfResidents');
    fillInputs(wrapper, data.socialInformation.occupation, 'occupation');
    fillInputs(wrapper, data.socialInformation.occupationMode, 'occupationMode');

    wrapper.find("select[name='familyIncome']").simulate('change', {
      target: {
        name: 'familyIncome',
        value: data.socialInformation.familyIncome,
      },
    });

    fillInputs(wrapper, data.socialInformation.hasChildren, 'hasChildren');

    wrapper.find('#saveButton').simulate('click');

    expect(fitModelAPI.create).toBeCalledTimes(1);
    expect(fitModelAPI.create).toBeCalledWith(data);
  });

  it('should load fit model data to edit', () => {
    fitModelAPI.get.mockReturnValue({});

    const props = {
      match: {
        params: {
          id: 'id',
        },
      },
    };

    mount(
      <Router>
        <FitModelForm {...props} />
      </Router>
    );

    expect(fitModelAPI.get).toBeCalledTimes(1);
    expect(fitModelAPI.get).toBeCalledWith(props.match.params.id);
  });

  it('should call update when editing', async () => {
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

    const wrapper = mount(
      <Router>
        <FitModelForm {...props} />
      </Router>
    );

    Promise.resolve(wrapper).then(() => {
      wrapper.find('#saveButton').simulate('click');

      expect(fitModelAPI.update).toBeCalledTimes(1);
      expect(fitModelAPI.update).toBeCalledWith(data);
    });
  });
});
