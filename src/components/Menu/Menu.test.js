import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuComponent from './Menu';

const Menu = props => (
  <Router>
    <MenuComponent {...props} />
  </Router>
);

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

it('should push path on history when click the button and path is passed', () => {
  const menuOptions = [
    {
      text: 'Button Text',
      path: '/path',
    },
  ];
  const { getByText } = render(<Menu menuOptions={menuOptions} />);
  fireEvent.click(getByText('Button Text'));

  expect(mockHistoryPush).toHaveBeenCalledWith('/path');
});

it('should call onClick when click the button and path is not passed', () => {
  const onClick = jest.fn();
  const menuOptions = [
    {
      text: 'Button Text',
      onClick,
    },
  ];
  const { getByText } = render(<Menu menuOptions={menuOptions} />);
  fireEvent.click(getByText('Button Text'));

  expect(onClick).toHaveBeenCalledTimes(1);
});
