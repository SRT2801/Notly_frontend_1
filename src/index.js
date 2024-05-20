// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; 
import 'notyf/notyf.min.css'; // for React, Vue and Svelte


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
