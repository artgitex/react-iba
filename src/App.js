import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td className="appHeader">
                Header
              </td>
            </tr>
            <tr>
              <td className="appBody">
                <Card />                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
