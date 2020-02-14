import React, { Component } from 'react';
import './CardList.css';

class Actions extends Component {
  render() {    
    return(
      <div className="ButtonBar">
        <div>
          <input type="checkbox" id="onlyView" name="onlyView" onChange={this.props.onChange} />
          <label htmlFor="onlyView">View only</label>
        </div>
        <div className="appCheckmark" onClick={this.props.onRemove}>Remove</div>
        <div className="appCheckmark" onClick={this.props.onAdd}>Add</div>
      </div>    
      )
  }
}

export default Actions;