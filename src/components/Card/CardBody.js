import React, { Component } from 'react';
import './Card.css';

class CardBody extends Component {  
  state = {
    bodyText: this.props.bodyText,
    bodyTextTemp: '',
    cardEdit: false,    
    cbChecked: false
  };
  
  static getDerivedStateFromProps(props, state) {
    let nextState = null;

    if (props.checkBoxState !== state.cbChecked) {      
      nextState = {cbChecked: !state.cbChecked}      
    };
    if (props.editState && !state.cardEdit) {
      nextState = {
        bodyTextTemp: state.bodyText,
        cardEdit: true,
        cbChecked: false
      } 
      props.clearState();
    };
    if (props.cancelState) {      
      nextState = {
        cardEdit: false,
        cbChecked: false
      };
      props.clearState();
    };
    if (props.saveState) {      
      nextState = {
        bodyText: state.bodyTextTemp,
        cardEdit: false,
        cbChecked: false
      };
      props.clearState();
    };

    return nextState;
  };
   
  changeBodyHandler = (event) => {
    this.setState({bodyTextTemp:  event.target.value});
  };

  renderCardBody = () => {      
    let cardBody = null;
    let textStyle = this.state.cbChecked ? "redText" : "blackText";

    if (!this.state.cardEdit || this.props.onlyView) {
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
            <textarea
              className="cardBodyEdit"
              value={this.state.bodyTextTemp}
              onChange={this.changeBodyHandler}/>            
          </div>            
        </div>
      )
    }   

    return cardBody
  }

  render() {    
    return (
      <div>
        {this.renderCardBody()}
      </div>
    )
  }
}

export default CardBody;