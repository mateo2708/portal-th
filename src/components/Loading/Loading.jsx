// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import classes from './style.module.css';

/**
 * @author Sebastian Botero
 * @component Loading
 * @description Default app loading
 */
function Loading({ className }) {
  return <div className={classNames(classes.root, className)} />;
}

Loading.defaultProps = {
  className: '',
};

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
