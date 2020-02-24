import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {CardContextProvider} from './context/Context';

ReactDOM.render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
  document.getElementById('root')
);