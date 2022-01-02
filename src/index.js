import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { createStore, combineReducers } from "redux";
import {Provider} from 'react-redux';
import signInReducer from './store/reducers/sign_in';
import cardDataReducer from './store/reducers/cardData';

const rootReducer = combineReducers({
  signIn: signInReducer,
  cardData: cardDataReducer
});

const store = createStore(rootReducer);

ReactDOM.render((  
  <BrowserRouter>
    <Provider store={store}>     
      <App />
    </Provider>  
  </BrowserRouter>
   ), 
  document.getElementById('root')
);