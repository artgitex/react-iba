import React, { Component } from 'react';
import './Card.css';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';

class Card extends Component {
  state = {
    cardHeaderText: this.props.cardHeaderText,
    cardBodyText: this.props.cardBodyText,
    cardHeaderTemp: '',
    cardBodyTemp: '',
    cbChecked: false,
    cardEdit: false   
  };

  checkBoxHandler = () => {
    this.setState({cbChecked: !this.state.cbChecked});
  };

  cardEditHandler = () => {
    this.setState({
      cardEdit: !this.state.cardEdit,
      cardHeaderTemp: this.state.cardHeaderText,
      cardBodyTemp: this.state.cardBodyText
    });
    if (this.state.cbChecked) {
      this.setState({cbChecked: false});
    };
  };

  cardSaveHandler = () => {
    this.setState({cardHeaderText: this.state.cardHeaderTemp});
    this.setState({cardBodyText: this.state.cardBodyTemp});
    this.setState({cardEdit: !this.state.cardEdit});
  };

  cardCancelHandler = () => {
    this.setState({cardEdit: !this.state.cardEdit});
  };

  cardChangeHeader = (event) => {      
      this.setState({cardHeaderTemp:  event.target.value});
  };

  cardChangeBody = (event) => {      
    this.setState({cardBodyTemp:  event.target.value});
  };
    
  render() {    
    let textStyle = this.state.cbChecked ? "redText" : "blackText";
    let cardActions = null;
    let cardTitle = null;
    let cardBody = null;    
    
    if (this.props.cbOnlyView) {

      cardTitle = (
        <div className="cardTitle">
          {this.state.cardHeaderText}
        </div>
      );
      cardActions = (
        <div>          
          <input className="cardCheckmark" type="checkbox" onChange={this.checkBoxHandler} checked={this.state.cbChecked}/>
        </div>
      );
      cardBody = (
        <div className="cardBodyShow">          
          {this.state.cardBodyText}
        </div>
      );
    } else {
      if (this.state.cardEdit) {    
        cardTitle = (
          <div>
            <input className="cardTitle" maxLength="25" type="text" value={this.state.cardHeaderTemp} onChange={this.cardChangeHeader}/>         
          </div>
        );
        cardActions = (
          <div>
            <MdSave className="cardSave" onClick={this.cardSaveHandler}/>
            <MdCancel className="cardCancel" onClick={this.cardCancelHandler}/>          
          </div>
        );      
        cardBody = (
          <div>
            <textarea className="cardBodyEdit" value={this.state.cardBodyTemp} onChange={this.cardChangeBody}/>
          </div>
        );      
      } else {
         cardTitle = (
          <div className="cardTitle">
            {this.state.cardHeaderText}
          </div>
        );
        cardActions = (
          <div>
            <MdEdit className="cardEdit" onClick={this.cardEditHandler} />
            <input className="cardCheckmark" type="checkbox" onChange={this.checkBoxHandler} checked={this.state.cbChecked} />
          </div>
        );
        cardBody = (
          <div className="cardBodyShow">          
            {this.state.cardBodyText}
          </div>
        );       
      };
    }    

    return (      
      <div className="card">
        <div className="cardHeader">
          {cardTitle}
          {cardActions}
        </div>
        <hr />
        <div className={textStyle}>          
            {cardBody}          
        </div>
      </div>      
    );
  }
}

export default Card;