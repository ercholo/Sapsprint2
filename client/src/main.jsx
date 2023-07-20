import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CustomPaginationActionsTable from './components/tablas.jsx'
import SelectAutoWidth from './components/selectAlmacen.jsx'
import SelectAutoWidthTipoPapel from './components/selectTipoPapel.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className="flexbox"><SelectAutoWidth /><SelectAutoWidthTipoPapel /></div>
    <CustomPaginationActionsTable />
  </React.StrictMode>,
)
