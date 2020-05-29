import React, { Component } from 'react';
import icon from '../../assets/icon.png';
import banner from '../../assets/banner.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import classes from './Menu.module.css';

const Exit = React.lazy(() => import('./Exit'));

class Menu extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <img
            className="icon"
            src={icon}
            alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"
          />
          <img
            className="banner"
            src={banner}
            alt="banner da Agência Compromisso"
          />
          <ul className="agencia-btn-group">
            <li>
              <Link to="/cadastro">
                <Button variant="contained" className={classes.Button}>
                  Cadastro
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/lista">
                <Button variant="contained" className={classes.Button}>
                  Lista
                </Button>
              </Link>
            </li>
            <li>
              <Exit />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Menu;
