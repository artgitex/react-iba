import React, { Component } from 'react';
import './CardEdit.css';
import '../Card/Card.css';
import { connect } from 'react-redux';

class CardEdit extends Component {
    
    card = this.props.cardData.cards.filter(val => val.id === this.props.match.params.id) 

    state = {
        id: this.props.match.params.id,
        headerTextTemp: this.card[0].headerText,        
        bodyTextTemp: this.card[0].bodyText
    };

    headerChangeHandler = event => {    
        this.setState({headerTextTemp: event.target.value});
    };

    bodyChangeHandler = event => {    
        this.setState({bodyTextTemp: event.target.value});
    };

    goToHome = () => {
        this.props.history.push('/home');
    }

    render() {
        console.log (this.props.cardData.cards);

        return (
            <div className="cardEditN">
                <input 
                    className="cardTitle"
                    maxLength="25"
                    type="text"
                    value={this.state.headerTextTemp}
                    onChange={(event) => this.headerChangeHandler(event)}
                />
                <br /><br />
                <textarea
                    className="cardBodyEdit"
                    value={this.state.bodyTextTemp}
                    onChange={(event) => this.bodyChangeHandler(event)}                   
                />
                <br /><br />
                <div style={{width: '100%'}}>
                    <div className="ButtonBar">                        
                        <div className="appCheckmark" onClick={() => {this.props.onCardUpdated(this.props.match.params.id, this.state.headerTextTemp, this.state.bodyTextTemp); this.goToHome()}}>Save</div>
                        <div className="appCheckmark" onClick={this.goToHome}>Cancell</div>
                    </div>        
                </div>
            </div>
        )
    }    
}

const mapStateToProps = state => {    
    return {
        cardData: state.cardData
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onCardUpdated: (id, header, body) => dispatch({type: 'UPDATECARD', id: id, headerText: header, bodyText: body})
    }
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(CardEdit);
