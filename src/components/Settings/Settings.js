import React, { Component } from 'react';
import './Settings.css';
import { onViewOnlyAction } from '../../store/actions';
import { connect } from 'react-redux';

class Settings extends Component {   

    render() {
        return (
            <div className='settings'>Settings                
                <div className='input'>              
                    <input type="checkbox" id="onlyView" name="onlyView" onChange={this.props.onViewOnlyAction} checked={this.props.cardData.onlyView}/>
                    <label htmlFor="onlyView">view only</label>
                </div>            
            </div>
        )
    }    
}

const mapStateToProps = state => ({cardData: state.cardData});  

const mapDispatchToProps = { onViewOnlyAction };

export default connect(mapStateToProps,mapDispatchToProps)(Settings);
