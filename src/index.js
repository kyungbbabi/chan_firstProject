import React from 'react';
import { ReactDOM } from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);