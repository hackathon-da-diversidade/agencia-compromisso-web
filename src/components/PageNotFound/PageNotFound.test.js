import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';

it('loads component', () => {
  const { getByText } = render(
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );

  expect(getByText('Página não encontrada.')).toBeInTheDocument();
});
