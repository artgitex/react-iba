import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';


class App extends Component {
  render() {
    return (      
      <div className="App">
        <table className="appTable">
          <tbody>
            <tr>
              <td>
                <table><tbody><tr><td><img className="logo" alt="" src={require('.\\Img\\React_logo.png')} /></td><td><h1>My First React App</h1></td></tr></tbody></table>
              </td>              
            </tr>
            <tr>
              <td><div className="appBar"/></td>
            </tr>
            <tr>
              <td><Card /></td>
            </tr>
          </tbody>
        </table>        
      </div>      
    );
  }
}

export default App;