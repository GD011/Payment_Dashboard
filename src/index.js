import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider theme={{
    algorithm: theme.lightAlgorithm
  }}>
  <Router>
    <App />
    </Router>
  </ConfigProvider>
);

