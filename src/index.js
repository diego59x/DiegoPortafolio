import React from 'react'
import ReactDOM from 'react-dom'
import { FirebaseAppProvider } from 'reactfire'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import firebaseConfig from './firebase-config'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    ,
  </FirebaseAppProvider>,
  document.getElementById('root'),
)
