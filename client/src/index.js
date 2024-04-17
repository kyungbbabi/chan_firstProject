import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { StoreProvider } from './store/store';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);