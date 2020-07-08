// Dependencies
import React, { Suspense, lazy } from 'react';

// Components
import Loading from '@components/Loading';

// Lazy import
const MiEmpresa = lazy(() => import('@views/MiEmpresa/index'));

/**
 * @author MateoTG.
 * @component MiEmpresa. 
 * @description MiEmpresa lazy loading wrapper.
 */
const LazyMiEmpresa = (props) => (
  <Suspense fallback={<Loading />}>
    <MiEmpresa {...props} />
  </Suspense>
);

export default LazyMiEmpresa;
