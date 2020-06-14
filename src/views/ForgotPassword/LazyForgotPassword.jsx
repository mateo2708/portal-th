// Dependencies
import React, { Suspense, lazy } from 'react';

// Components
import Loading from '@components/Loading';

// Lazy import
const ForgotPassword = lazy(() => import('@views/ForgotPassword/index'));

/**
 * @author MateoTG.
 * @component ForgotPassword. 
 * @description ForgotPassword lazy loading wrapper.
 */
const LazyForgotPassword = (props) => (
  <Suspense fallback={<Loading />}>
    <ForgotPassword {...props} />
  </Suspense>
);

export default LazyForgotPassword;
