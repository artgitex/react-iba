import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardList.css';

class CardList extends Component {
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
    
  cardsToRemove = [];

  checkBoxAppHandler = () => {
    this.setState({onlyView: !this.state.onlyView});    
  };

  cardsToRemoveHandler = (id, state) => {
    if(state) {
      this.cardsToRemove.push(id);
    } else {
      this.cardsToRemove = this.cardsToRemove.filter(val => val!==id);
    }
  };

  removeCardHandler = () => {
    let cards = [...this.state.cards];    
    cards = cards.filter(val => !this.cardsToRemove.includes(val.id));
    this.setState({cards: cards});
  }

  render() {
    let cards = null;    
    cards = (
      <div className="cardBody">
        {this.state.cards.map((card, index) => {
          return <Card
            key={card.id}
            onlyView={this.state.onlyView}
            cardsToRemoveHandler={this.cardsToRemoveHandler}
            {...card}
          />              
        })}
      </div>
    );      
    return (
      <div>
        <div className="ButtonBar">
          <div>
            <input type="checkbox" id="onlyView" name="onlyView" onChange={this.checkBoxAppHandler} />
            <label htmlFor="onlyView">View only</label>
          </div>
          <div className="appCheckmark" onClick={this.removeCardHandler}>
            Remove
          </div>
        </div>        
        {cards}
      </div>
    )
  }
}

export default CardList;