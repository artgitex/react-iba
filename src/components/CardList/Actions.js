import React, { Component } from 'react';
import './CardList.css';
import { connect } from 'react-redux';
import { onViewOnlyAction, onAddNewCard, onRemoveCard } from '../../store/actions';

class Actions extends Component {
  
  render() {
    return(
      <div style={{width: '100%'}}>
        <div className="ButtonBar">
          <div className="appCheckmark" onClick={this.props.onRemoveCard}>Remove</div>
          <div className="appCheckmark" onClick={this.props.onAddNewCard}>Add</div>
        </div>
        <div style={{display: 'inline-block', width: '50%',textAlign: 'end'}}>
          <button type="button" className="btnCounter">
            Cards <span className="badge badge-light">{this.props.cardData.cards.length}</span>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({cardData: state.cardData});

const mapDispatchToProps = { onViewOnlyAction, onAddNewCard, onRemoveCard };

export default connect(mapStateToProps,mapDispatchToProps)(Actions);