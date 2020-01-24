//import React from 'react';
import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = {
    cbChecked: false
  };

  checkBoxHandler = () => {
    this.setState({cbChecked: !this.state.cbChecked});
  };

  render() {
    let textStyle = this.state.cbChecked ? "redText" : "blackText";
        
    return (
      <div className="card">
        <table className="cardTable">
          <tbody>
            <tr>
              <td>
                <table className="cardHeader">
                  <tbody>
                    <tr>
                      <td>Tab number One</td>
                      <td className="cardCmPosition">
                        <input className="cardCheckmark" type="checkbox" onChange={this.checkBoxHandler} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr/>
              </td>
            </tr>
            <tr>
              <td>
                <p className={textStyle}>I expect some text here...</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Card;