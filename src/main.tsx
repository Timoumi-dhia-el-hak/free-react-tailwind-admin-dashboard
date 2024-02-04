import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
import './satoshi.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
   
         <Routes >
        <Route path="/*" element= {<App />}>
          </Route >
          </Routes>
        
     </BrowserRouter>
    
  </React.StrictMode>
);
