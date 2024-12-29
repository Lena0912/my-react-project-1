import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import './index.css'
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
<BrowserRouter basename='/my-react-project-1/'>
  <StrictMode>  
    
    <App />
    
  </StrictMode>,
  </BrowserRouter>
)