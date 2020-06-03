import { useAuth } from 'reactfire';
import Button from '@material-ui/core/Button';
import classes from './Menu.module.css';
import React from 'react';

const Exit = () => {
  const auth = useAuth();

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <Button onClick={signOut} className={classes.ButtonSignOut}>
      Sair
    </Button>
  );
};

export default Exit;
