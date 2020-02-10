import React, { Component } from 'react';
import './Card.css';

class CardBody extends Component {
    
  state = {
    bodyText: this.props.bodyText,
    bodyTextTemp: '',
    cardEdit: false,
    cbChecked: false
  };

  UNSAFE_componentWillReceiveProps(nextProps){    
    if (nextProps.checkBoxState) {
      this.setState({cbChecked: true});
    } else {
      this.setState({cbChecked: false});
    }

    if (nextProps.editState) {     
      this.setState({
        bodyTextTemp: this.state.bodyText,
        cardEdit: true,
        cbChecked: false
      });
      nextProps.clearState();      
    } else if (nextProps.cancelState) {            
      this.setState({        
        cardEdit: false,
        cbChecked: false
      });
      nextProps.clearState();      
    } else if (nextProps.saveState) {      
      this.setState({
        bodyText: this.state.bodyTextTemp,
        cardEdit: false,
        cbChecked: false
      });
      nextProps.clearState();      
    };    
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
        {this.renderCardBody()}
      </div>
    )
  }
}

export default CardBody;