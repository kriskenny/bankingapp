import ReactDOM from 'react-dom/client';
import './public/index.css';
import App from '../src/App.mjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './public/App.css';
import { UserProvider } from './Components/userprovider';
import React from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);


