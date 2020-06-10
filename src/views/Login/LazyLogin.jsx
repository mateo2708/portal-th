// Dependencies
import React, { Suspense, lazy } from 'react';

// Components
import Loading from '@components/Loading';

// Lazy import
const Login = lazy(() => import('@views/Login/index'));

/**
 * @author MateoTG.
 * @component Login. 
 * @description Login lazy loading wrapper.
 */
const LazyLogin = (props) => (
  <Suspense fallback={<Loading />}>
    <Login {...props} />
  </Suspense>
);

export default LazyLogin;
