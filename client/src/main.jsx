import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
          domain="dev-ki8q7hk8bikdfv1a.us.auth0.com"//TODO Use .env here
          clientId="ukP7deD6aEYHqnudlEdhBiO1moTnDWNd"
          authorizationParams={{
              redirect_uri: window.location.origin
          }}
      >
        <App />

      </Auth0Provider>
    
  </React.StrictMode>,
)
