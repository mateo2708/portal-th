// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AppRoutes from '@components/AppRoutes';

// Styles
import classes from './style.module.css';

/**
 * @author MateoTG.
 * @component Layout.
 * @description Layout del dashboard.
 */
function Layout(props, { className }) {
  return (
    <div className={classNames(classes.root, className)}>
      <div>El menú</div>
      <div>
        <AppRoutes routes={props.routes} />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  className: '',
};

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
