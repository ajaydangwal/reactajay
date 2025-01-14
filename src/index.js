// src/index.js

import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering the app
import './index.css'; // Optional: for global styling (you can skip this if you don't have a CSS file)
import App from './App'; // Import the main App component
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);