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

  renderTitle = () => {
    return this.props.onlyView || !this.state.cardEdit ? (      
      <div className="cardTitle">
        {this.state.headerText}
      </div> ) : (
      <div>
        <input 
          className="cardTitle"
          maxLength="25"
          type="text"
          value={this.state.headerTextTemp}
          onChange={this.changeHeaderHandler}/>         
      </div> 
      )
  };
  
  renderActions() {
    const {onlyView} = this.props;
    const {cardEdit} = this.state;
    
    return (
      <div>
        {!onlyView && cardEdit && (
          <React.Fragment>
            <MdSave
              className="cardSave"
              onClick={this.saveHandler}/>
            <MdCancel
              className="cardCancel"
              onClick={this.cancelHandler}/> 
          </React.Fragment>
        )}
        {!onlyView && !cardEdit && (          
            <MdEdit className="cardEdit" onClick={this.editHandler} />
        )}
        {(onlyView || !cardEdit) && (
          <input
            className="cardCheckmark"
            type="checkbox"
            onChange={this.checkBoxHandler}
            checked={this.state.cbChecked}/>
        )}
      </div>
    )
  };
  
  render() {    
    return (
      <div className="cardHeader">
        {this.renderTitle()}
        {this.renderActions()}
      </div>
    )
  }
}

export default CardHeader;