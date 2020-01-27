import React, { Component } from 'react';
import './Card.css';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';

class Card extends Component {
  state = {
    cardHeaderText: 'Tab number One',
    cardBodyText: 'I expect some text here...',
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
    let cardHeader = null;
    let cardBody = null;    
  
    if (this.state.cardEdit) {    
      cardActions = (
        <span>
          <MdSave className="cardSave" onClick={this.cardSaveHandler}/>
          <MdCancel className="cardCancel" onClick={this.cardCancelHandler}/>          
        </span>
      );
      cardHeader = (
        <span>
          <input type='text' value={this.state.cardHeaderTemp} onChange={this.cardChangeHeader}/>
        </span>
      );
      cardBody = (
        <span>
          <input type='text' value={this.state.cardBodyTemp} onChange={this.cardChangeBody}/>
        </span>
      );      
    } else {
      cardHeader = (
        <span>
          {this.state.cardHeaderText}
        </span>
      );
      cardBody = (
        <span>
          {this.state.cardBodyText}
        </span>
      );
      cardActions = (
        <span>
          <MdEdit className="cardEdit" onClick={this.cardEditHandler} />
          <input className="cardCheckmark" type="checkbox" onChange={this.checkBoxHandler} />          
        </span>
      );
    };

    return (
      <div className="card">
        <table className="cardTable">
          <tbody>
            <tr>
              <td>
                <table className="cardHeader">
                  <tbody>
                    <tr>
                      <td>
                        {cardHeader}
                      </td>
                      <td className="cardCmPosition">
                        {cardActions}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr/>
              </td>
            </tr>
            <tr>
              <td>
                <p className={textStyle}>
                  {cardBody}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Card;