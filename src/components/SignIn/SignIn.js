import React, {Component} from 'react';
import './SignIn.css';
import Input from '../Input/Input';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import { signin } from '../../store/reducers/signinSlice';

class SignInU extends Component {    
    state = {
        signInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                    label: 'Email'
                },
                value: '',
                validation: {
                    reqired: true,
                    name: true,
                    password: false
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Password',
                    label: 'Password'
                },
                value: '',
                validation: {
                    reqired: true,
                    name: false,
                    password: true
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false                
    }

    inputChangeHandler = (event, inputIdentifier) => {        
        const updatedSignInForm = {...this.state.signInForm}
        const updatedFormElement = updatedSignInForm[inputIdentifier];
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedSignInForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedSignInForm) {
            formIsValid = updatedSignInForm[inputIdentifier].valid && formIsValid;
        }        
        
        this.setState({signInForm: updatedSignInForm});

        if (formIsValid) {
            this.setState({formIsValid: true});            
        }        
    }

    checkValidity(value, rules) {

        let isValid = true;

        if (rules.reqired) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.name) {            
            isValid = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(value.trim().toLowerCase()) && isValid;           
        }
        
        if (rules.password) {            
            isValid = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})").test(value.trim().toLowerCase()) && isValid;           
        }  

        return isValid;
    }

    submitHandler = () => {
        if (this.state.formIsValid) {
            this.props.signin({signedin: true, username: this.state.signInForm.email.value, password: this.state.signInForm.password.value});
            this.props.history.push('/home'); 
        } else {
            alert('Email or Password is Incorrect!!!')
        }       
    };   
    
    render() {

        const formElementsArray = [];
        for (let key in this.state.signInForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signInForm[key]
            })
        }

        return (
            <div className="SignIn">
            
                {(this.props.signInSlice.submitted) ? <p style={{color: 'red'}}>You have already Signed In</p> :  null}

                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangeHandler(event, formElement.id)}
                    />
                ))}

                <button className='Button' disabled={!this.state.formIsValid} onClick={this.submitHandler}>Enter</button>

            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        signInSlice: state.signInSlice,
        cardData: state.cardData     
    });
    
const mapDispatchToProps = { signin };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInU));