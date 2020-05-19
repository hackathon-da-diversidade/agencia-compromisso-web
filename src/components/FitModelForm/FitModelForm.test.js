import React from 'react';
import { configure, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import fitModelAPI from '../../api/fitModelAPI';
import FitModelForm from './FitModelForm';

jest.mock('../../api/fitModelAPI');

configure({ adapter: new Adapter() });

beforeEach(() => jest.clearAllMocks());

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

    wrapper
      .find("input[name='name']")
      .simulate('change', { target: { name: 'name', value: data.name } });
    wrapper.find("input[name='birthday']").simulate('change', {
      target: { name: 'birthday', value: data.birthday },
    });
    wrapper
      .find("input[name='availability']")
      .first()
      .simulate('change', {
        target: {
          name: 'availability',
          value: data.availability,
        },
      });
    wrapper
      .find("input[name='inProjects']")
      .first()
      .simulate('change', {
        target: {
          name: 'inProjects',
          value: data.inProjects,
        },
      });
    wrapper.find("input[name='phoneNumber']").simulate('change', {
      target: {
        name: 'phoneNumber',
        value: data.phoneNumber,
      },
    });
    wrapper
      .find("input[name='address']")
      .simulate('change', { target: { name: 'address', value: data.address } });
    wrapper.find("select[name='genderExpression']").simulate('change', {
      target: {
        name: 'genderExpression',
        value: data.genderExpression,
      },
    });
    wrapper
      .find("input[name='identifyAsLGBTQIA']")
      .first()
      .simulate('change', {
        target: {
          name: 'identifyAsLGBTQIA',
          value: data.identifyAsLGBTQIA,
        },
      });
    wrapper.find("select[name='education']").simulate('change', {
      target: { name: 'education', value: data.education },
    });
    wrapper
      .find("textarea[name='notes']")
      .simulate('change', { target: { name: 'notes', value: data.notes } });

    wrapper
      .find('#measuresTab')
      .first()
      .simulate('click');

    wrapper.find("input[name='totalBustCircumference']").simulate('change', {
      target: {
        name: 'totalBustCircumference',
        value: data.sizes.totalBustCircumference,
      },
    });
    wrapper.find("input[name='totalWaistCircumference']").simulate('change', {
      target: {
        name: 'totalWaistCircumference',
        value: data.sizes.totalWaistCircumference,
      },
    });
    wrapper.find("input[name='totalHipCircumference']").simulate('change', {
      target: {
        name: 'totalHipCircumference',
        value: data.sizes.totalHipCircumference,
      },
    });
    wrapper.find("input[name='height']").simulate('change', {
      target: { name: 'height', value: data.sizes.height },
    });
    wrapper
      .find("input[name='shirtSize']")
      .first()
      .simulate('change', {
        target: {
          name: 'shirtSize',
          value: data.sizes.shirtSize,
        },
      });
    wrapper
      .find("input[name='pantsSize']")
      .first()
      .simulate('change', {
        target: {
          name: 'pantsSize',
          value: data.sizes.pantsSize,
        },
      });
    wrapper
      .find("input[name='shoeSize']")
      .first()
      .simulate('change', {
        target: {
          name: 'shoeSize',
          value: data.sizes.shoeSize,
        },
      });
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
    wrapper
      .find("input[name='housing']")
      .first()
      .simulate('change', {
        target: {
          name: 'housing',
          value: data.socialInformation.housing,
        },
      });
    wrapper.find("input[name='numberOfResidents']").simulate('change', {
      target: {
        name: 'numberOfResidents',
        value: data.socialInformation.numberOfResidents,
      },
    });
    wrapper.find("input[name='occupation']").simulate('change', {
      target: {
        name: 'occupation',
        value: data.socialInformation.occupation,
      },
    });
    wrapper
      .find("input[name='occupationMode']")
      .first()
      .simulate('change', {
        target: {
          name: 'occupationMode',
          value: data.socialInformation.occupationMode,
        },
      });
    wrapper.find("select[name='familyIncome']").simulate('change', {
      target: {
        name: 'familyIncome',
        value: data.socialInformation.familyIncome,
      },
    });
    wrapper
      .find("input[name='hasChildren']")
      .first()
      .simulate('change', {
        target: {
          name: 'hasChildren',
          value: data.socialInformation.hasChildren,
        },
      });

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
