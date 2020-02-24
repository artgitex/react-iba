import React, { Component } from 'react';
import './CardList.css';
import { CardContextConsumer } from "../../context/Context";

class Actions extends Component {
  render() {    
    return(
      <CardContextConsumer>
        {context => (
          <div className="ButtonBar">           
            <div>
              <input type="checkbox" id="onlyView" name="onlyView" onChange={context.onChange} />
              <label htmlFor="onlyView">View only</label>
            </div>
            <div className="appCheckmark" onClick={context.onRemove}>Remove</div>
            <div className="appCheckmark" onClick={context.onAdd}>Add</div>
          </div>    
        )}
      </CardContextConsumer>
      )
  }
}

export default Actions;