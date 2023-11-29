/** Statement of Authorship: I Sanjay Kumar, 000811237 certify that the given work is my own work and I have not used anyone code without due acknowledment and have not made my code available to some else to be copied. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.css';
import { GlobalProvider } from './Context/globalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GlobalProvider>
          <App />
    </GlobalProvider>
  </React.StrictMode>
);

