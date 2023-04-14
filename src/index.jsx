import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './index.css'

if (import.meta.env.NODE_ENV === 'development') {
  // Only load dotenv in development mode
  import('dotenv').then((dotenv) => dotenv.config());
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
)
