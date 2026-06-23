import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SearchBox from './components/SearchBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SearchBox/> */}
  </StrictMode>,
)
