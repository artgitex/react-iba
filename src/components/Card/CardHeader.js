import React, { Component } from 'react';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import './Card.css';

class CardHeader extends Component {  
  renderTitle = () => {
    const {headerText, headerTextTemp, isOnlyView, isEdit, onChange} = this.props;
    let cardTitle = null;

    if (isOnlyView || !isEdit) {
      cardTitle = (
        <div className="cardTitle">
          {headerText}
        </div>
      );
    } else {
      cardTitle = (
        <div>
          <input 
            className="cardTitle"
            maxLength="25"
            type="text"
            value={headerTextTemp}
            onChange={onChange}/>
      </div> 
      )
    } 

    return cardTitle;    
  };
  
  renderActions() {
    const {isOnlyView, isEdit, cancelHandler, saveHandler, editHandler, checkBoxHandler} = this.props;
    return (
      <div>
        {!isOnlyView && isEdit && (
          <React.Fragment>
            <MdSave
              className="cardSave"
              onClick={saveHandler}/>
            <MdCancel
              className="cardCancel"
              onClick={cancelHandler}/> 
          </React.Fragment>
        )}
        {!isOnlyView && !isEdit && (          
            <MdEdit className="cardEdit" onClick={editHandler} />
        )}
        {(isOnlyView || !isEdit) && (
          <input
            className="cardCheckmark"
            type="checkbox"            
            onClick={checkBoxHandler}
            />
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