import { Buffer } from 'buffer'; // Import Buffer from 'buffer'
import React from 'react';
// Make Buffer available globally
window.Buffer = Buffer;

import { createRoot } from 'react-dom/client';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <TonConnectUIProvider manifestUrl="https://gray-personal-armadillo-107.mypinata.cloud/ipfs/QmNYY3adpYY4CR8TkT1ovRFa9beZ8fZm5WCexJYxufeFEJ">
    <App />
  </TonConnectUIProvider>
);
