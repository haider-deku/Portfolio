import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './headernav'
import Main from './main'
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <footer>
        © 2025 Haider YOUZBECHI. directed by Haider YOUZBECHI
    </footer>
  </React.StrictMode>
);


reportWebVitals();
