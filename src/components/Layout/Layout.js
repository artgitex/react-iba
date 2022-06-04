import React from 'react';
import { connect } from 'react-redux';
import '../../containers/App.css'
import {NavLink} from 'react-router-dom';
import { signout } from '../../store/reducers/signinSlice';

const Layout = (props) => {

  const renderWelcome = () => 
    props.signInSlice.submitted
      ? <li><span>Welcome <span style={{fontWeight: 'bold'}}>{props.signInSlice.username}</span></span></li>
      : null
    
  const renderSettings = () => 
    (props.signInSlice.submitted && props.signInSlice.userrole === 'Admin')
      ? <li><NavLink to='/settings' exact>Settings</NavLink></li>
      : null
  
  const renderSignin = () => 
    props.signInSlice.submitted
      ? <li><NavLink to='/sign_in' exact onClick={props.signout}>Sign Out</NavLink></li>
      : <li><NavLink to='/sign_in' exact>Sign In</NavLink></li>
  
  return (
    <div className="App">
      <div className="appHeader">
          <div>
            <img className="logo" alt="" src={require('..\\..\\assets\\Img\\React_logo.png')} />            
            <h1>My First React App</h1>            
          </div>
          <div>
            <nav className="navigation">              
              <ul>
                {renderWelcome()}
                <li><NavLink to='/home'>Home</NavLink></li>
                {renderSettings()}
                {renderSignin()}
              </ul>
            </nav>
          </div>          
        </div>
        <div className="appBar"/>
        { props.children }
    </div>
  ) 
};

const mapStateToProps = state => (
  {
    signInSlice: state.signInSlice     
  });

const mapDispatchToProps = { signout };  

export default connect(mapStateToProps, mapDispatchToProps)(Layout);