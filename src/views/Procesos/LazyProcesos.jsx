// Dependencies
import React, { Suspense, lazy } from 'react';

// Components
import Loading from '@components/Loading';

// Lazy import
const Procesos = lazy(() => import('@views/Procesos/index'));

/**
 * @author MateoTG.
 * @component Procesos. 
 * @description Procesos lazy loading wrapper.
 */
const LazyProcesos = (props) => (
  <Suspense fallback={<Loading />}>
    <Procesos {...props} />
  </Suspense>
);

export default LazyProcesos;
