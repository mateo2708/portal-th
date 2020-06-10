// Dependencies
import React, { Suspense, lazy } from 'react';

// Components
import Loading from '@components/Loading';

// Lazy import
const Dashboard = lazy(() => import('@views/Dashboard/index'));

/**
 * @author MateoTG.
 * @component Dashboard. 
 * @description Dashboard lazy loading wrapper.
 */
const LazyDashboard = (props) => (
  <Suspense fallback={<Loading />}>
    <Dashboard {...props} />
  </Suspense>
);

export default LazyDashboard;
