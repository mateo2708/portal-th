// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import classes from './style.module.scss';

//Components
import { Layout } from 'antd';

const { Header, Content } = Layout;
/**
 * @author MateoTG
 * @component MiEmpresa
 * @description View to display MiEmpresa information
 */
function MiEmpresa({ className }) {
  return (
    <div className={classNames(classes.root, className)}>
      <Header>Mi Empresa</Header>
      <Content>Aqui va todo el content</Content>
    </div>
  );
}

MiEmpresa.defaultProps = {
  className: '',
};

MiEmpresa.propTypes = {
  className: PropTypes.string,
};

export default MiEmpresa;
