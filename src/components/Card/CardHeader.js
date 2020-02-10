import React, { Component } from 'react';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import './Card.css';

class CardHeader extends Component {
  state = {
    headerText: this.props.headerText,
    headerTextTemp: '',
    cardEdit: false,
    cbChecked: false
  };
  
  editHandler = () => {    
    this.setState({
      cardEdit: true,
      headerTextTemp: this.state.headerText,     
      cbChecked: false
    });
    this.props.editHandler(true);
  };

  cancelHandler = () => {
    this.setState({
      cardEdit: false,
      cbChecked: false
    });
    this.props.cancelHandler(true);
  };

  saveHandler = () => {
    this.setState({
      headerText: this.state.headerTextTemp,      
      cardEdit: false,
      cbChecked: false
    });
    this.props.saveHandler(true);
  };

  checkBoxHandler = () => {    
    this.setState({cbChecked: !this.state.cbChecked});
    this.props.checkBoxHandler(!this.state.cbChecked);
  };

  changeHeaderHandler = (event) => {      
    this.setState({headerTextTemp:  event.target.value});
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
  
  render() {    
    return (
      <div>
        {this.renderCardHeader()}        
      </div>
    )
  }
}

export default CardHeader;