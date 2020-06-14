export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || 'AIzaSyAXPQilQnW0OLp_SXwbBuJaeCFlWGfhgF0',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || 'th-abogados.firebaseapp.com',
  databaseURL: process.env.REACT_APP_DATABASE_URL || 'https://th-abogados.firebaseio.com',
  projectId: process.env.REACT_APP_PROJECT_ID || 'th-abogados',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || 'th-abogados.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || '281599135653',
  appId: process.env.REACT_APP_APP_ID || '1:281599135653:web:381efa0cb106281e88e24c',
  measurementId: process.env.REACT_MEASUREMENT_ID || 'G-9WNTCDX863',
};
const config = {
  firebaseConfig: {
    ...firebaseConfig,
  },
};

export default config;
