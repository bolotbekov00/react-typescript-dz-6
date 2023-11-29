import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ApiSrc from "./components/ApiSrc";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ApiSrc/>
  </React.StrictMode>
);

