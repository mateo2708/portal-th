import React from 'react';

//Views
import LazyLogin from '@views/Login/LazyLogin';
import LazyProcesos from '@views/Procesos/LazyProcesos';
import LazyMiEmpresa from '@views/MiEmpresa/LazyMiEmpresa';

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
        path: `${pathStart}dashboard/procesos`,
        component: LazyProcesos,
      },
      {
        path: `${pathStart}dashboard/consultas`,
        component: () => <h1>Consultas</h1>,
      },
      {
        path: `${pathStart}dashboard/mi-empresa`,
        component: LazyMiEmpresa,
      },
      {
        path: `${pathStart}dashboard/mi-perfil`,
        component: () => <h1>Mi Perfil</h1>,
      },
    ],
  },
  // {
  //   redirect: true,
  //   to: `${pathStart}auth/login`,
  // },
];

export default routes;
