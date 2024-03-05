import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/sb-admin-2.min.css';

import reportWebVitals from './reportWebVitals';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element with id 'root' not found in the document.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();