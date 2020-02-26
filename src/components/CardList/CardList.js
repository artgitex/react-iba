import React, { Component } from 'react';
import Card from '../Card/Card';
import Actions from '../CardList/Actions';
import './CardList.css';
import { CardContextConsumer } from "../../context/Context";

class CardList extends Component {  
  render() {
    let cards = null;

    cards = (
      <div className="cardBody">
        <CardContextConsumer>
          {context => (           
            context.cards.map((card, index) => {
              return <Card
                key={card.id}
                onlyView={context.onlyView}
                cardsToRemoveHandler={context.removeCard}
                {...card}
            />  
            })
          )}
        </CardContextConsumer>
      </div>
    );
   
    return (
      <div>        
        <Actions />
        {cards}
      </div>
    )
  }
}

export default CardList;