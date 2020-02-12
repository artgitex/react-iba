import React, { Component } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 10px;
  padding: 15px;
  width: 400px;
  height: 300px;
  border: 1px solid;
  border-color: ${props => props.alt};
  border-radius: 5px;
`;

class Card extends Component {
  state = {
    cardEdit: false,
    cardCancel: false,
    cardSave: false,
    cbChecked: false,
    clearState: false     
  };

  
  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.clearState !== nextState.clearState) {      
      return false
    }
    return true
  };
  
  editHandler = (cardEdit) => {
    this.setState({cardEdit: cardEdit});    
  };

  cancelHandler = (cardCancel) => {   
    this.setState({cardCancel: cardCancel});
  };

  saveHandler = (cardSave) => {    
    this.setState({cardSave: cardSave});    
  };

  checkBoxHandler = (cbChecked) => {
    this.setState({cbChecked});
    this.props.cardsToRemoveHandler(this.props.id, cbChecked);
  };

  clearState = () => {
    this.setState({
      cardEdit: false,
      cardCancel: false,
      cardSave: false,
      cbChecked: false,
      clearState: !this.state.clearState
    });   
  }  

  render() {    
    return (           
      <StyledCard alt={this.props.onlyView ? '#FFA07A' : '#C0C0C0'}>          
        <CardHeader 
          headerText={this.props.headerText}
          onlyView={this.props.onlyView}           
          checkBoxHandler={this.checkBoxHandler}            
          editHandler={this.editHandler}
          cancelHandler={this.cancelHandler}
          saveHandler={this.saveHandler} />            
        <hr />
        <CardBody            
          bodyText={this.props.bodyText}
          onlyView={this.props.onlyView}
          checkBoxState={this.state.cbChecked}
          editState={this.state.cardEdit} 
          cancelState={this.state.cardCancel} 
          saveState={this.state.cardSave}
          clearState={this.clearState}/>
      </StyledCard>      
    );
  }
}

export default Card;