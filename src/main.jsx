import { React } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize";
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename='/my-react-project-1/'>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode >
  
);
