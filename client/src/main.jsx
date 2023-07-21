import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomPaginationActionsTable from './components/tablas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CustomPaginationActionsTable />
  </React.StrictMode>,
)
