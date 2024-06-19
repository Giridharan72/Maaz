import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './Apps'
import './index.css'
import App from './App'
import Availablebus from './Components/BusResults'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Availablebus/> */}
  </React.StrictMode>,
)
