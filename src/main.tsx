import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@fontsource/poppins';
import '@fontsource/poppins/700.css'; // Extra Bold (for design match)

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
