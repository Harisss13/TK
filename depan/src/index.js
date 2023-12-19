import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bulma/css/bulma.css";
import { AuthProvider } from '../src/components/AuthContext';
import { Provider } from 'react-redux';
import {store} from './app/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
      <App />
      </Provider>
  </AuthProvider>
  </React.StrictMode>
);
