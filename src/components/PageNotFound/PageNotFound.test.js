import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

it('matches the snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
