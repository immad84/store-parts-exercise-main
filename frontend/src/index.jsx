import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line import/extensions
import 'jquery/dist/jquery.js';
// eslint-disable-next-line import/extensions
import 'popper.js/dist/umd/popper.js';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
