import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {CardContextProvider} from './context/Context';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>  
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </BrowserRouter> ), 
  document.getElementById('root')
);