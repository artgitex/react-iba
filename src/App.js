import React, { Component } from 'react';
import './App.css';
import Body from './Body/Body';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <div>
          <img className="logo" alt="" src={require('.\\Img\\React_logo.png')} />
          <h1>My First React App</h1>
          <div className="appBar"/>
        </div>
        <div>
          <Body />
        </div>
      </div>
    );
  }
}

export default App;