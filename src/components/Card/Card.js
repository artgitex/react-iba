import React, { Component } from 'react';
import './Card.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import styled from 'styled-components';
import withLoadingDelay from '../../hoc/withLoadingDelay';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const StyledCard = styled.div`
  margin: 10px;
  padding: 15px;
  width: 400px;
  height: 300px;
  border: 1px solid;
  border-color: ${props => props.alt};
  border-radius: 5px;
`;

class Card extends Component {  

  state = {
    cardEdit: false,    
    cbChecked: false,    
    headerText: this.props.headerText,
    headerTextTemp: this.props.headerText,
    bodyText: this.props.bodyText,
    bodyTextTemp: this.props.bodyText    
  };  

  editHandler = () => {
    this.setState({cardEdit: true, cbChecked: false});
  };

  cancelHandler = () => {    
    this.setState({cardEdit: false, cbChecked: false, bodyTextTemp: this.state.bodyText, headerTextTemp: this.state.headerText});
  };

  saveHandler = () => {    
    this.setState({cardEdit: false, cbChecked: false, bodyText: this.state.bodyTextTemp, headerText: this.state.headerTextTemp});    
    this.props.cardUpdateHandler(this.props.id, this.state.headerTextTemp, this.state.bodyTextTemp, );
  };

  checkBoxHandler = () => {
    this.setState({cbChecked: !this.state.cbChecked});
    this.props.cardsToRemoveHandler(this.props.id, !this.state.cbChecked);
  };
  
  bodyChangeHandler = event => {    
    this.setState({bodyTextTemp: event.target.value});
  };

  headerChangeHandler = event => {    
    this.setState({headerTextTemp: event.target.value});
  };

  render() {    
    const {headerText, headerTextTemp, bodyText, bodyTextTemp} = this.state; 
    
    return (               
      <StyledCard alt={this.props.onlyView ? '#FFA07A' : '#C0C0C0'}>      
        <CardHeader 
          headerText={headerText}
          headerTextTemp={headerTextTemp}
          isOnlyView={this.props.onlyView}
          isEdit={this.state.cardEdit}
          isChecked={this.state.cbChecked}          
          onChange={this.headerChangeHandler}          
          editHandler={this.editHandler}          
          cancelHandler={this.cancelHandler}
          saveHandler={this.saveHandler}
          checkBoxHandler={this.checkBoxHandler} />
        <hr />
        <CardBody
          bodyText={bodyText}
          bodyTextTemp={bodyTextTemp}
          isOnlyView={this.props.onlyView}
          isEdit={this.state.cardEdit}
          isChecked={this.state.cbChecked}
          onChange={this.bodyChangeHandler} />
      </StyledCard>      
    );
  }
}

Card.propTypes = {
  onlyView: PropTypes.bool,
  cardEdit: PropTypes.bool,
  cbChecked: PropTypes.bool,
  headerChangeHandler: PropTypes.func,
  editHandler: PropTypes.func,
  cancelHandler: PropTypes.func,
  saveHandler: PropTypes.func,
  checkBoxHandler: PropTypes.func,
  bodyChangeHandler: PropTypes.func,
  headerText: PropTypes.string,
  bodyText: PropTypes.string,
  headerTextTemp: PropTypes.string,
  bodyTextTemp: PropTypes.string
}


export default withRouter(withLoadingDelay(Card));