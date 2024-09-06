import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-hwk7kdjg4jctqq85.us.auth0.com"
    clientId="HPPibLvY8ItAxtLUScWPkIdlwwE1v1eg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
  

    <App />
    </Auth0Provider>,
)
