import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from './components/history'

import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <Router history={history}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

