import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Detail from "./Detail";
import fitModelAPI from "../../api/fitModelAPI";
import {BrowserRouter as Router} from "react-router-dom";
import {Alert} from "@material-ui/lab";
import Header from "../Header/Header";

jest.mock('../../api/fitModelAPI');

configure({adapter: new Adapter()});

describe('<Detail />', () => {
  it('should call API', () => {
    fitModelAPI.get.mockReturnValue({});

    const match = {
      params: {
        id: '1'
      }
    };

    const location = {
      state: {
        registrationSuccessful: true,
      }
    };

    mount(
      <Router>
        <Detail match={match} location={location}/>
      </Router>
    );

    expect(fitModelAPI.get).toBeCalledTimes(1);
    expect(fitModelAPI.get).toBeCalledWith(match.params.id);
  });
});
