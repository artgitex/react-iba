import React, { Component } from 'react';
import Card from '../Card/Card';
import Actions from '../CardList/Actions';
import './CardList.css';
import Page404 from '../Page404/Page404';
import {Route} from 'react-router-dom';

import { connect } from 'react-redux';

class CardList extends Component {  

  render() {
    let cardList = null;

    cardList = (
      <div>
        {(this.props.submitted) ?
          <div className="cardBody">
            <Actions />
            {this.props.cardData.cards.map((card, index) => {
              return (                
                <Card
                  key={card.id}
                  onlyView={this.props.cardData.onlyView}                  
                  {...card}
                />                
              )
            })}  
          </div>
           : <Route component={Page404}/>}
      </div>
    )   
   
    return (
      <div>       
        {cardList}               
      </div>
    )
  }
}

const mapStateToProps = state => {    
  return {      
      submitted: state.signIn.submitted,
      cardData: state.cardData
  }
};


export default connect(mapStateToProps, null)(CardList);
