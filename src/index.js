import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/montserrat/400.css';  // Regular (обычный)
import '@fontsource/montserrat/500.css';  // Medium
import '@fontsource/montserrat/600.css';  // SemiBold
import '@fontsource/montserrat/700.css';  // Bold (жирный)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);