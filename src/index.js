import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import signInReducer from './store/reducers/sign_in';
import signInSlice from './store/reducers/signinSlice';
import cardDataReducer from './store/reducers/cardData';
import thunk from 'redux-thunk'; 

const rootReducer = combineReducers({
  signIn: signInReducer,
  signInSlice: signInSlice,
  cardData: cardDataReducer
});

const logger = store => {
  return next => {
      return action => {
          console.log("Dispatching", action);
          const result = next(action);
          return result;
      }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render((  
  <BrowserRouter>
    <Provider store={store}>     
      <App />
    </Provider>  
  </BrowserRouter>
   ), 
  document.getElementById('root')
);