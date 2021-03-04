import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList/CardList';
import {Route, NavLink, Redirect} from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn';

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
            <nav className="navigation">
              <ul>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/sign_in'>Sign In</NavLink></li>                  
              </ul>
            </nav>
          </div>          
        </div>
        <div className="appBar"/>       
        <Route path='/home' component={CardList} />
        <Route path='/sign_in' component={SignIn}/>
        <Redirect from='/'  to='/sign_in' />       
      </div>
    );
  }
}

export default App;