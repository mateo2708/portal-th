// Dependencies
import React from 'react';
import { Route } from 'react-router';
import './App.less';

// Views
import Login from '@views/Login';

/**
 * @author Sebastian Botero
 * @component App
 * @description Default App container.
 */
function App() {
  return <Route path="/" component={Login}></Route>;
}

export default App;
