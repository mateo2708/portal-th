// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import classes from './style.module.css';

/**
 * @author MateoTG
 * @component ForgotPassword
 * @description Página para recuperar la contraseña
 */
function ForgotPassword({ className }) {

  return (
    <div className={classNames(classes.root, className)}>
      ForgotPassword
    </div>
  );
}

ForgotPassword.defaultProps = {
  className: PropTypes.string,
};

ForgotPassword.propTypes = {
  className: '',
};

export default ForgotPassword;
