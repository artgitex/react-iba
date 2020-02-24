import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList/CardList';
import { CardContextConsumer } from "../context/Context";

class App extends Component {
  render() {    
    return (
      <div className="App">
        <div className="appHeader">
          <div>
            <img className="logo" alt="" src={require('..\\assets\\Img\\React_logo.png')} />
            <h1>My First React App</h1>
          </div>
          <div>
            <CardContextConsumer>
              {context => (          
                <button type="button" className="btnCounter">
                  Cards <span className="badge badge-light">{context.cardsCount}</span>
                </button>
              )}
            </CardContextConsumer>
          </div>
        </div>
        <div className="appBar"/>         
        <CardList />        
      </div>
    );
  }
}

export default App;