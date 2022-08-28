import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // strict mode disabled to prevent double render on axios 
);


