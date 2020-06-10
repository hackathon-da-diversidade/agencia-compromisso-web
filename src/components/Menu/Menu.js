import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import classes from './Menu.module.css';

const Menu = ({ menuOptions }) => {
  const history = useHistory();

  const handleClick = (path, onClick) => {
    if (path) return history.push(path);
    onClick();
  };

  return (
    <div className={classes.Menu}>
      {menuOptions.map(({ text, icon = '', path, onClick }, index) => (
        <Button
          className="PrimaryButton"
          variant="contained"
          key={index}
          onClick={() => handleClick(path, onClick)}
        >
          {icon}
          {text}
        </Button>
      ))}
    </div>
  );
};

Menu.propTypes = {
  menuOptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string,
      onClick: PropTypes.func,
      icon: PropTypes.element,
    })
  ),
};
export default Menu;
