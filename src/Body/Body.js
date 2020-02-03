import React, { Component } from 'react';
import Card from '../Card/Card';
import './Body.css';
import styled from 'styled-components';

const StyledCheckBox = styled.div`
  margin-top: 5px;
  width: 110px;
  border-radius: 5px; 
  user-select: none;

  &: hover {
    background: #61DBFB;
    font-weight: bold;
    color: white;
  }
`;

class Body extends Component {
    state = {
        cards: [
          {id:'id1', headerText: 'Tab number One', bodyText: 'I expect some text here...'},
          {id:'id2', headerText: 'Tab number Two', bodyText: 'I expect some text here...'},
          {id:'id3', headerText: 'Tab number Three', bodyText: 'I expect some text here...'},
          {id:'id4', headerText: 'Tab number Four', bodyText: 'I expect some text here...'},
          {id:'id5', headerText: 'Tab number Five', bodyText: 'I expect some text here...'},
          {id:'id6', headerText: 'Tab number Six', bodyText: 'I expect some text here...'},
          {id:'id7', headerText: 'Tab number Seven', bodyText: 'I expect some text here...'}
        ],
        onlyView: false
      };
      
      checkBoxAppHandler = () => {
        this.setState({onlyView: !this.state.onlyView});    
      };

    render() {
      let cards = null;    
      cards = (
       <div className="cardBody">
         {this.state.cards.map((card, index) => {
           return <Card
             key={card.id}
             onlyView={this.state.onlyView}
             {...card}
           />              
         })}
       </div>
      );      
      return (
        <div>         
          <StyledCheckBox>
            <input className="appCheckmark" type="checkbox" id="onlyView" name="onlyView" onChange={this.checkBoxAppHandler} />
            <label htmlFor="onlyView">view only</label>
          </StyledCheckBox>          
          {cards}
        </div>
      )
    }
}

export default Body;