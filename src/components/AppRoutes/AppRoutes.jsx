// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

/**
 * @author Sebastian Botero
 * @component AppRoutes
 * @description AppRoutes Component
 */
const AppRoutes = ({ routes }) => (
  <Switch>
    {routes.map(({ redirect, path, to, exact, component }, key) =>
      redirect ? (
        <Redirect exact={exact} from={path} to={to} key={key} />
      ) : (
        <Route path={path} exact={exact} component={component} key={key} />
      )
    )}
  </Switch>
);

/**
 * @name AppRoutes.propTypes
 */
AppRoutes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      to: PropTypes.string,
      exact: PropTypes.bool,
      redirect: PropTypes.redirect,
      component: PropTypes.any,
    })
  ),
};

/**
 * @name AppRoutes.defaultProps
 */
AppRoutes.defaultProps = {
  routes: [],
};

export default AppRoutes;
