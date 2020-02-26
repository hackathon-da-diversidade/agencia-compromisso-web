import React, { useEffect, useState } from 'react';
import isLogged from './isLogged';
import { Redirect } from 'react-router-dom';

export default component => {
  return props => {
    const [redirectToComponent, setRedirectToComponent] = useState(false);

    useEffect(() => {
      let componentIsMounted = true;

      isLogged()
        .then(logged => {
          console.warn(logged);
          if (componentIsMounted) {
            setRedirectToComponent(logged);
          }
          console.warn(redirectToComponent);
        })
        .catch(err => console.error(err));
      return () => {
        componentIsMounted = false;
      };
    }, []);

    console.log(redirectToComponent, component);
    if (redirectToComponent) {
      return <component {...props} />;
    }

    return <Redirect to="/login" />;
  };
};
