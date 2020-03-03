import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Login from './Login';

afterEach(cleanup);

it('should render the login button', () => {
  const { getByRole } = render(<Login loginAction={() => {}} />);
  expect(getByRole('button')).toHaveTextContent('Login');
});

it('Should click the login on the button', () => {
  const mockAction = jest.fn();
  const { getByText } = render(<Login loginAction={mockAction} />);
  fireEvent.click(getByText('Login'));

  expect(mockAction.mock.calls.length).toEqual(1);
});

it('matches the snapshot', () => {
  const { asFragment } = render(<Login loginAction={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
