import React, { Component } from 'react';
import './CardEdit.css';
import '../Card/Card.css';
import { connect } from 'react-redux';

import { onCardUpdated } from '../../store/actions';

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

    renderSave = () => 
        (!this.props.cardData.onlyView)
        ? (<div className="appCheckmark" onClick={() => {this.props.onCardUpdated(this.props.match.params.id, this.state.headerTextTemp, this.state.bodyTextTemp); this.goToHome()}}>Save</div>)
        : (null)    

    render() {
        return (
            <div className="cardEditN">
                <input 
                    className="cardTitle"
                    maxLength="25"
                    type="text"
                    value={this.state.headerTextTemp}                    
                    onChange={this.headerChangeHandler}
                />
                <br /><br />
                <textarea
                    className="cardBodyEdit"
                    value={this.state.bodyTextTemp}                    
                    onChange={this.bodyChangeHandler}
                />
                <br /><br />
                <div style={{width: '100%'}}>
                    <div className="ButtonBar">                        
                        { /*<div className="appCheckmark" onClick={() => {this.props.onCardUpdated(this.props.match.params.id, this.state.headerTextTemp, this.state.bodyTextTemp); this.goToHome()}}>Save</div>*/ }
                        {this.renderSave()}
                        <div className="appCheckmark" onClick={this.goToHome}>Cancell</div>
                    </div>        
                </div>
            </div>
        )
    }    
}

const mapStateToProps = state => ({cardData: state.cardData});  

const mapDispatchToProps = { onCardUpdated };

export default connect(mapStateToProps,mapDispatchToProps)(CardEdit);
