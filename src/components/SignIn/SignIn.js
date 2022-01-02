import React, {Component} from 'react';
import './SignIn.css';
import Input from '../../components/Input/Input';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';

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
        }
    }   

    fillCards = () => {
        axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
            .then(response => {
                const cardsList = response.data.slice(0, 15).map(card => {
                    return {
                        id: card['Number'],
                        headerText: card['Name'],
                        bodyText: card['About']
                    };
                });
                this.props.onFillCardData(cardsList);                
                this.props.history.push('/home');                
            }).catch(error => {
                this.props.onError(true);        
        });
    }

    submitHandler = () => {
        if (this.props.formIsValid) {
            this.props.onSubmit(true);
            if (!this.props.cardData.cardsLoaded) {
                this.fillCards();                
            }           
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

        this.setState({signInForm: updatedSignInForm});
        this.props.onCheckValidityForm(formIsValid);
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
        const formElementsArray = [];
        for (let key in this.state.signInForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signInForm[key]
            })
        }
        
        return (
            <div className="SignIn">

                {(this.props.cardData.cardsLoaded) ? <p style={{color: 'red'}}>You have already Signed In</p> :  null}
                                
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
                
                <button className='Button' disabled={!this.props.formIsValid} onClick={() => {this.submitHandler()}}>Enter</button>                
                
            </div>
        )
    }
}

const mapStateToProps = state => {    
    return {       
        formIsValid: state.signIn.formIsValid,
        submitted: state.signIn.submitted,
        cardData: state.cardData
    }
};

const mapDispatchToProps = dispatch => {
    return {        
        onSubmit: (val) => dispatch({type: 'SUBMIT', value: val}),        
        onCheckValidityForm: (val) => dispatch({type: 'VALIDATE_FORM', value: val}),
        onFillCardData: (val) => dispatch({type: 'FILLCARD', value: val}),
        onError: (val) => dispatch({type: 'ERROR', value: val})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));