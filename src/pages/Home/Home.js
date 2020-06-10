import React from 'react';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
const Exit = React.lazy(() => import('./components/Exit'));

const MENU_OPTIONS = [
  {
    text: 'Cadastro',
    path: '/cadastro',
  },
  {
    text: 'Lista',
    path: '/lista',
  },
];

const Home = () => {
  return (
    <>
      <Logo />
      <Menu menuOptions={MENU_OPTIONS} />
      <Exit />
    </>
  );
};

export default Home;
