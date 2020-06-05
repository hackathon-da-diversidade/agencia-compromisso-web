import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('renders without crashing', async () => {
  render(<App />);
});
