import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList/CardList';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <div>
          <img className="logo" alt="" src={require('..\\assets\\Img\\React_logo.png')} />
          <h1>My First React App</h1>
          <div className="appBar"/>
        </div>
        <div>
          <CardList />
        </div>
      </div>
    );
  }
}

export default App;