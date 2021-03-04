import React, {Component} from 'react';
import './SignIn.css';
import {Redirect} from 'react-router-dom';
import { CardContextConsumer } from "../../context/Context";

class SignIn extends Component {    
    state = {
        email: '',
        password: '',
        submitted: false
    }    

    submitHandler = () => {
        if (this.state.email && this.state.password) {
            this.setState({submitted: true});
        } else {
            alert('Email or Password is Incorrect!!!')
        }        
    };

    onChangeEmail = event => {    
        this.setState({email: event.target.value});
    };   

    onChangePassword = event => {    
        this.setState({password: event.target.value});
    };

    render() {        
        let redirect = null;
        if (this.state.submitted) {            
            redirect = <Redirect to='/home' />
        }

        return (
            <div className="SignIn">
                <CardContextConsumer>
                  {context => (context.submitted) ? <p style={{color: 'red'}}>You have already Signed In</p> :  null}
                </CardContextConsumer>                
                <label>Email</label>
                <input type="text" onChange={this.onChangeEmail} />
                <label>Password</label>
                <input type="text" onChange={this.onChangePassword} />                
                <CardContextConsumer>
                  {context => (<button onClick={() => {this.submitHandler(); context.onSubmitUpdate(this.state.email, this.state.password)}}>Enter</button>)}               
                </CardContextConsumer>              
                
                {redirect}
            </div>
        )
    }
}

export default SignIn;