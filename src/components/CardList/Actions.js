import React, { Component } from 'react';
import './CardList.css';
import { connect } from 'react-redux';

class Actions extends Component {
  
  render() {
    return(
      <div style={{width: '100%'}}>
        <div className="ButtonBar">           
          <div>              
            <input type="checkbox" id="onlyView" name="onlyView" onChange={this.props.onViewOnlyAction} checked={this.props.cardData.onlyView}/>
            <label htmlFor="onlyView">View only</label>
          </div>
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

const mapStateToProps = state => {    
  return {
      cardData: state.cardData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onViewOnlyAction: () =>  dispatch({type: 'VIEWONLY'}),
    onAddNewCard: () =>  dispatch({type: 'ADDCARD'}),
    onRemoveCard: () =>  dispatch({type: 'REMOVECARD'})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Actions);