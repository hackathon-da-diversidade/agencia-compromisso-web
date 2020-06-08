import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Menu.module.css';

const Menu = ({ menuOptions }) => {
  const history = useHistory();

  const handleClick = (path, onClick) => {
    if (path) return history.push(path);
    onClick();
  };

  return (
    <div className={styles.Menu}>
      {menuOptions.map(({ text, icon = '', path, onClick }, index) => (
        <button
          key={index}
          className={styles.MenuOption}
          onClick={() => handleClick(path, onClick)}
        >
          {icon}
          {text}
        </button>
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
