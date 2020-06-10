import { useAuth } from 'reactfire';
import Button from '@material-ui/core/Button';
import classes from './Exit.module.css';
import React from 'react';

const Exit = () => {
  const auth = useAuth();

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <div className={classes.Exit}>
      <Button onClick={signOut} className={classes.ButtonSignOut}>
        Sair
      </Button>
    </div>
  );
};

export default Exit;
