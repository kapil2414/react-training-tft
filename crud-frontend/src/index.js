import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId='597509502102-7qklrhmti8savjbpff0qsag91j5jdgcq.apps.googleusercontent.com'
      >
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
