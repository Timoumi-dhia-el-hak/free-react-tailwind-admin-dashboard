import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './auth/authConfig';
import { MsalProvider } from '@azure/msal-react';
import store from './redux/store';
import { Provider } from 'react-redux';
const msalInstance = new PublicClientApplication(msalConfig);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MsalProvider instance={msalInstance}>
        <Provider store={store}>
          <App />
        </Provider>
      </MsalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
