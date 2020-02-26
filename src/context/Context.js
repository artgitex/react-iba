import React, { Component } from 'react';
import axios from 'axios';

const { Provider, Consumer } = React.createContext();

class CardContextProvider extends Component {  
 state = {
  cards: [],
  onlyView: false,
  error: false
};

  componentDidMount() {        
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
      .then(response => {
        const cardsList = response.data.slice(0, 15).map(card => {
          return {
            id: card['Number'],
            headerText: card['Name'],
            bodyText: card['About']
          };
        });
        this.setState({cards: cardsList});
      }).catch(error => {
        this.setState({error: true});
      });
   };

  cardsToRemove = [];

  checkBoxAppHandler = () => {
    this.setState({onlyView: !this.state.onlyView});
  };

  addCardHandler = () => {    
    let cards = [...this.state.cards];
    let lastCard = cards[cards.length-1];
    let newCard = {id: 'id' + (+lastCard.id.slice(2) + 1), headerText: 'This is new Card', bodyText: 'I expect some text here...'};
    cards.push(newCard);    
    this.setState({cards: cards});
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
  };

  render() {
    if (this.state.error) {
      return (<p style={{paddingLeft: "10px"}}>Something went wrong!</p>)
    } else {
      return (    
        <Provider
            value={{
              onlyView: this.state.onlyView,
              cards: this.state.cards,
              cardsCount: this.state.cards.length,
              onAdd: this.addCardHandler,
              onRemove: this.removeCardHandler,
              removeCard: this.cardsToRemoveHandler,
              onChange: this.checkBoxAppHandler
            }} >
            {this.props.children}
        </Provider>      
      );
    }
  }
}

export { CardContextProvider, Consumer as CardContextConsumer };