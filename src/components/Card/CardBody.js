import React, { Component } from 'react';
import './Card.css';

class CardBody extends Component {
  render() {
    const { isOnlyView, isChecked, onChange, isEdit, bodyText, bodyTextTemp } = this.props;
    const textStyle = isChecked ? 'redText' : 'blackText';
    let cardBody = null;

    if (!isEdit || isOnlyView) {
      cardBody = (
        <div className={textStyle}>
          <div className="cardBodyShow">{bodyText}</div>
        </div>
      );
    } else {
      cardBody = (
        <div>
          <div>
            <textarea
              className="cardBodyEdit"
              value={bodyTextTemp}
              onChange={onChange}
            />
          </div>
        </div>
      );
    }
    return <div>{cardBody}</div>;
  }
}

export default CardBody;