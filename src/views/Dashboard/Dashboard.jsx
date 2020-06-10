// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

// Routes
import routes from '@views/Dashboard/routes';
import AppRoutes from '@components/AppRoutes';

// Styles
import classes from './style.module.css';

import { Button } from 'antd';

/**
 * @author MateoTG
 * @component Dashboard
 * @description View to handle the dashboard
 */
function Dashboard({ className }) {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.root, className)}>
      Dashboard
      <Button>Test Button</Button>
      <AppRoutes routes={routes} />
    </div>
  );
}

Dashboard.defaultProps = {
  className: PropTypes.string,
};

Dashboard.propTypes = {
  className: '',
};

export default Dashboard;
