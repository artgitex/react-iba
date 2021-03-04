import React, { Component } from 'react';
import Card from '../Card/Card';
import Actions from '../CardList/Actions';
import './CardList.css';
import { CardContextConsumer } from "../../context/Context";
import Page404 from '../Page404/Page404';
import {Route} from 'react-router-dom';

class CardList extends Component { 
  
  render() {    
    let cardList = null;

    cardList = (
      <div>
        <CardContextConsumer>
          {context => (
            (context.submitted) ?  
              <div className="cardBody">
                <Actions />
                {context.cards.map((card, index) => {
                    return (                  
                      <Card
                        key={card.id}
                        onlyView={context.onlyView}
                        cardsToRemoveHandler={context.removeCard}
                        cardUpdateHandler={context.onCardUpdate}
                        {...card}
                      />                  
                    )
                  })
                }
              </div>
               : <Route component={Page404}/>
          )}
        </CardContextConsumer>
      </div>
    );
   
    return (
      <div>        
        {cardList}        
      </div>
    )
  }
}

export default CardList;