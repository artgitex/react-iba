import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import CardList from '../CardList/CardList';
import SignIn from '../SignIn/SignIn';
import CardEdit from '../CardEdit/CardEdit';
import Settings from '../Settings/Settings';
import { connect } from 'react-redux';

const Routes = (props) => (
    <Switch>
        <Route path='/home' exact component={CardList} />
        <Route path='/sign_in' exact component={SignIn}/> 
        <Route path='/settings' exact component={Settings}/>
        <Route path='/home/:id' component={CardEdit}/>
        {!props.submitted && <Redirect from='/'  to='/sign_in' />}         
    </Switch>
)

const mapStateToProps = state => (
    {
      submitted: state.signInSlice.submitted    
    });

export default connect(mapStateToProps, null)(Routes);
