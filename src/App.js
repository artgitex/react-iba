import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  state = {
    cards: [
      {id:'id1', cardHeaderText: 'Tab number One', cardBodyText: 'I expect some text here...'},
      {id:'id2', cardHeaderText: 'Tab number Two', cardBodyText: 'I expect some text here...'},
      {id:'id3', cardHeaderText: 'Tab number Three', cardBodyText: 'I expect some text here...'},
      {id:'id4', cardHeaderText: 'Tab number Four', cardBodyText: 'I expect some text here...'},
      {id:'id5', cardHeaderText: 'Tab number Five', cardBodyText: 'I expect some text here...'},
      {id:'id6', cardHeaderText: 'Tab number Six', cardBodyText: 'I expect some text here...'},
      {id:'id7', cardHeaderText: 'Tab number Seven', cardBodyText: 'I expect some text here...'}
    ],
    cbOnlyView: false
  };
  
  checkBoxAppHandler = () => {
    this.setState({cbOnlyView: !this.state.cbOnlyView});    
  };

  render() {    
    let cards = null;
    //if (this.state.cbOnlyView) {
      cards = (
        <div className="cardBody">
          {this.state.cards.map((card, index) => {
            return <Card
              key={card.id}
              cbOnlyView={this.state.cbOnlyView}
              {...card}
            />              
          })}          
        </div>
      );      
    //}    
    
    return (
      <div className="App">
        <div>
          <img className="logo" alt="" src={require('.\\Img\\React_logo.png')} />
          <h1>My First React App</h1>
          <div className="appBar"/>
        </div>
        <div>
          <input className="appCheckmark" type="checkbox" onChange={this.checkBoxAppHandler} />view only
          {cards}
        </div>
      </div>
    );
  }
}

export default App;