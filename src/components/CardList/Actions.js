import React, { Component } from 'react';
import './CardList.css';
import { CardContextConsumer } from "../../context/Context";

class Actions extends Component { 
  render() {    
    return(
      <CardContextConsumer>
        {context => (
          <div style={{width: '100%'}}>
            <div className="ButtonBar">           
              <div>              
                <input type="checkbox" id="onlyView" name="onlyView" onChange={context.onChange} checked={context.onlyView}/>
                <label htmlFor="onlyView">View only</label>
              </div>
              <div className="appCheckmark" onClick={context.onRemove}>Remove</div>
              <div className="appCheckmark" onClick={context.onAdd}>Add</div>                          
            </div>
            <div style={{display: 'inline-block', width: '50%',textAlign: 'end'}}>
                <button type="button" className="btnCounter">
                  Cards <span className="badge badge-light">{context.cardsCount}</span>
                </button>
              </div>
          </div>
        )}
        
      </CardContextConsumer>
      )
  }
}

export default Actions;