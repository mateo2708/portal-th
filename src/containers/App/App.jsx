// Dependencies
import React from 'react';
import Router from '@components/AppRoutes';
import routes from '@views/routes';
import './App.less';

/**
 * @author Sebastian Botero
 * @component App
 * @description Default App container.
 */
function App() {
  return <Router routes={routes}></Router>;
}

export default App;
