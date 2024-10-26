import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
  <TonConnectUIProvider manifestUrl="https://gray-personal-armadillo-107.mypinata.cloud/ipfs/QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH">
        <App/>
      </TonConnectUIProvider>
 
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
