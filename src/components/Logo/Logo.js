import React from 'react';
import icon from 'assets/icon.png';
import banner from 'assets/banner.png';

import styles from './Logo.module.css';

const Logo = () => (
  <>
    <img
      className={styles.Icon}
      src={icon}
      alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"
    ></img>
    <img
      className={styles.Banner}
      src={banner}
      alt="banner da Agência Compromisso"
    ></img>
  </>
);

export default Logo;
