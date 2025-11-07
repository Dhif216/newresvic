import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // <--- CRUCIAL FIX: Added the .tsx extension

// IMPORT GLOBAL STYLES
import './App.css'; 

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Failed to find the root element in the DOM (must have id='root').");
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);