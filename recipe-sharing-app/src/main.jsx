import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // This can stay for basic global styles, or you can delete it and remove this line

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* The App component contains the Router, so we render App directly here. */}
    <App />
  </React.StrictMode>,
);