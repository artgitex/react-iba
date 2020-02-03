import React, { Component } from 'react';
import './Card.css';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 10px;
  padding: 15px;
  width: 400px;
  height: 300px;
  border: 1px solid;
  border-color: ${props => props.alt ? '#FFA07A' : '#C0C0C0'}; ;
  border-radius: 5px;
`;

class Card extends Component {
  state = {
    headerText: this.props.headerText,
    bodyText: this.props.bodyText,
    headerTextTemp: '',
    bodyTextTemp: '',
    cbChecked: false,
    cardEdit: false   
  };

  checkBoxHandler = () => {
    this.setState({cbChecked: !this.state.cbChecked});
  };

  editHandler = () => {
    this.setState({
      cardEdit: !this.state.cardEdit,
      headerTextTemp: this.state.headerText,
      bodyTextTemp: this.state.bodyText,
      cbChecked: false
    })   
  };

  saveHandler = () => {
    this.setState({
      headerText: this.state.headerTextTemp,
      bodyText: this.state.bodyTextTemp,
      cardEdit: !this.state.cardEdit,
      cbChecked: false
    })
  };

  cancelHandler = () => {
    this.setState({
      cardEdit: !this.state.cardEdit,
      cbChecked: false});
  };

  changeHeaderHandler = (event) => {      
      this.setState({headerTextTemp:  event.target.value});
  };

  changeBodyHandler = (event) => {      
    this.setState({bodyTextTemp:  event.target.value});
  };
  
  renderCardHeader = () => {    
    let cardHeader = null;

    if (this.props.onlyView) {
      cardHeader = (
        <div className="cardHeader">
          <div className="cardTitle">
            {this.state.headerText}
          </div>
          <div>          
            <input className="cardCheckmark" type="checkbox" onChange={this.checkBoxHandler} checked={this.state.cbChecked}/>
          </div>
        </div>
      )      
    } else {
      if (this.state.cardEdit) {
        cardHeader = (
          <div className="cardHeader">       
            <div>
              <input className="cardTitle" maxLength="25" type="text" value={this.state.headerTextTemp} onChange={this.changeHeaderHandler}/>         
            </div>       
            <div>
              <MdSave className="cardSave" onClick={this.saveHandler}/>
              <MdCancel className="cardCancel" onClick={this.cancelHandler}/>          
            </div>       
          </div>
        )
      } else {
        cardHeader = (
          <div className="cardHeader">
            <div className="cardTitle">
              {this.state.headerText}
            </div>        
            <div>
              <MdEdit className="cardEdit" onClick={this.editHandler} />
              <input className="cardCheckmark" type="checkbox" onChange={this.checkBoxHandler} checked={this.state.cbChecked} />
            </div>        
          </div>
        )
      }
    }

    return cardHeader
  }

  renderCardBody = () => {
    let cardBody = null;
    let textStyle = this.state.cbChecked ? "redText" : "blackText";

    if (this.props.onlyView || !this.state.cardEdit) {
      cardBody = (
        <div className={textStyle}>
          <div className="cardBodyShow">          
            {this.state.bodyText}
          </div>
        </div>
      )
    } else {
      cardBody = (
        <div>
          <div>
            <textarea className="cardBodyEdit" value={this.state.bodyTextTemp} onChange={this.changeBodyHandler}/>
          </div>            
        </div>
      )
    }

    return cardBody    
  }

  render() {
    return (
      <div>
        <StyledCard alt={this.props.onlyView ? 1 : undefined}>
          {this.renderCardHeader()}
          <hr />
          {this.renderCardBody()}
        </StyledCard>
      </div>
      
    );
  }
}

export default Card;