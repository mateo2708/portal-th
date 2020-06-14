// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import useRequireAuth from '@hooks/useRequireAuth';
import { ProvideAuth as AuthProvider } from '@hooks/useAuth';

/**
 * @author MateoTG
 * @component AppRoutes
 * @description AppRoutes Component
 */
const AppRoutes = ({ routes }) => (
  <Switch>
    <AuthProvider>
      {routes.map(({ redirect, path, to, routes: subroutes, exact, authentication, component }, key) => {
        if (authentication) {
          return <AuthRoute path={path} exact={exact} routes={subroutes} component={component} key={key} />;
        }
        return redirect ? (
          <Redirect exact={exact} from={path} to={to} key={key} />
        ) : (
          <RouteWithSubRoutes path={path} exact={exact} routes={subroutes} component={component} key={key} />
        );
      })}
    </AuthProvider>
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

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

function AuthRoute(route) {
  const auth = useRequireAuth();

  if (auth) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    );
  }
  return null;
}

export default AppRoutes;
