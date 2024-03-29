import React, { Component } from 'react';
import Card from '../Card/Card';
import Actions from '../CardList/Actions';
import './CardList.css';
import Page404 from '../Page404/Page404';
import {Route} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { onFillCardData, onError} from '../../store/actions';

class CardList extends Component {

  fillCards = () => {
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
        .then(response => {
            const cardsList = response.data.slice(0, 15).map(card => ({
                id: card.Number,
                headerText: card.Name,
                bodyText: card.About                
            }));
            this.props.onFillCardData(cardsList);
        }).catch(error => this.props.onError(true));
  }

  render() {

    if (!this.props.submitted) {      
      return <Route component={Page404}/>
    }
    
    if (this.props.submitted && !this.props.cardData.cardsLoaded) {      
        this.fillCards();      
    }    
    
    const cardList = (
      <div className="cardBody">
        <Actions />
        {this.props.cardData.cards.map((card, index) =>           
          <Card
            {...card}
            key={card.id}
            onlyView={this.props.cardData.onlyView}
          />
        )}  
      </div>
    )

    return (
      <div>       
        {cardList}               
      </div>
    )
  }
}

const mapStateToProps = state => ({  
  submitted: state.signInSlice.submitted,
  cardData: state.cardData,  
});

const mapDispatchToProps = { onFillCardData, onError};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
