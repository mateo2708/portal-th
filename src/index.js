// Dependencies
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Translations
import '@utils/i18n';

// Containers
import App from '@containers/App';

// Components
import Loading from '@components/Loading';

// Styles
import '@styles/global.scss';

// Service worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Suspense fallback={Loading}>
    <Router>
      <App />
    </Router>
  </Suspense>,
  document.getElementById('root')
);

// PWA Support
serviceWorker.unregister();
