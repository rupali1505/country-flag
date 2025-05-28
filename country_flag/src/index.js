import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Countries from './Countries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Countries/>
  </React.StrictMode>
);

