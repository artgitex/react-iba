import React, {Component} from 'react';
import './SignIn.css';
import {Redirect} from 'react-router-dom';
import { CardContextConsumer } from "../../context/Context";
import Input from '../../components/Input/Input';

class SignIn extends Component {    
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
        formIsValid: false,      
        submitted: false
    }    

    submitHandler = () => {
        if (this.state.formIsValid) {
            this.setState({submitted: true});
        } else {
            alert('Email or Password is Incorrect!!!')
        }        
    };   

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
        this.setState({signInForm: updatedSignInForm, formIsValid: formIsValid});
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

    render() {        
        let redirect = null;
        if (this.state.submitted) {            
            redirect = <Redirect to='/home' />
        }

        const formElementsArray = [];
        for (let key in this.state.signInForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signInForm[key]
            })
        }

        return (
            <div className="SignIn">
                <CardContextConsumer>
                  {context => (context.submitted) ? <p style={{color: 'red'}}>You have already Signed In</p> :  null}
                </CardContextConsumer>
                
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

                <CardContextConsumer>
                  {context => (<button className='Button' disabled={!this.state.formIsValid} onClick={() => {this.submitHandler(); context.onSubmitUpdate(this.state.formIsValid)}}>Enter</button>)}               
                </CardContextConsumer>              
                
                {redirect}
            </div>
        )
    }
}

export default SignIn;