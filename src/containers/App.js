import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList/CardList';
import {Route, NavLink, Redirect} from 'react-router-dom';
import { signout } from '../store/reducers/signinSlice';
import SignIn from '../components/SignIn/SignIn';
import CardEdit from '../components/CardEdit/CardEdit';
import Settings from '../components/Settings/Settings'
import { connect } from 'react-redux';

class App extends Component {
  
  renderSignin = () => 
    this.props.signInSlice.submitted
      ? <li><NavLink to='/sign_in' exact onClick={this.props.signout}>Sign Out</NavLink></li>
      : <li><NavLink to='/sign_in' exact>Sign In</NavLink></li>
  
  renderWelcome = () => 
    this.props.signInSlice.submitted
      ? <li><span>Welcome <span style={{fontWeight: 'bold'}}>{this.props.signInSlice.username}</span></span></li>
      : null
  
  renderSettings = () => 
    (this.props.signInSlice.submitted && this.props.signInSlice.userrole === 'Admin')
      ? <li><NavLink to='/settings' exact>Settings</NavLink></li>
      : null
  
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
                {this.renderWelcome()}
                <li><NavLink to='/home'>Home</NavLink></li>
                {this.renderSettings()}
                {this.renderSignin()}
              </ul>
            </nav>
          </div>          
        </div>
        <div className="appBar"/>

        <Route path='/home' exact component={CardList} />
        <Route path='/sign_in' exact component={SignIn}/> 
        <Route path='/settings' exact component={Settings}/>
        <Route path='/home/:id' component={CardEdit}/>
        {!this.props.signInSlice.submitted ? <Redirect from='/'  to='/sign_in' /> : null} 
        
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    signInSlice: state.signInSlice     
  });

const mapDispatchToProps = { signout };

export default connect(mapStateToProps, mapDispatchToProps)(App);
