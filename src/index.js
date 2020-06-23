// Dependencies
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProvideAuth } from '@hooks/useAuth';

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
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </Router>
  </Suspense>,
  document.getElementById('root')
);

// PWA Support
serviceWorker.unregister();
