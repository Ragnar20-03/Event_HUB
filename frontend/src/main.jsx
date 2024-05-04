import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import Decide from './Pages/Decide.jsx'

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers = {
    Authorization : "Bearer "+localStorage.getItem('token')
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />

  </React.StrictMode>,
)
