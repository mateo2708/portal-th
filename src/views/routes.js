import React from 'react';
import LazyLogin from '@views/Login/LazyLogin';

import AppRoutes from '@components/AppRoutes';
import Layout from '@containers/Layout';

const pathStart = '/';

const routes = [
  {
    path: `${pathStart}auth`,
    component: AppRoutes,
    routes: [
      {
        path: `${pathStart}auth/login`,
        component: LazyLogin,
      },
      {
        path: `${pathStart}auth/forgot-password`,
        component: () => <h1>Forgot password</h1>,
      },
    ],
  },
  {
    path: `${pathStart}dashboard`,
    authentication: true,
    component: Layout,
    routes: [
      {
        path: `${pathStart}dashboard/sisas`,
        component: () => <h1>El dashboard</h1>,
      },
    ],
  },
  {
    redirect: true,
    to: '/auth/login',
  },
];

export default routes;
