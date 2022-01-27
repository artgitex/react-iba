import * as actionTypes from '../types';

const initialState = {  
  formIsValid: true,
  submitted: false
};

const reducer = ( state = initialState, action ) => {  
  switch ( action.type ) {    
    case actionTypes.VALIDATE_FORM:
      return {
        ...state,
        formIsValid: action.value
      }
    case actionTypes.SUBMIT:      
      return {
        ...state,
        submitted: action.value
      }
    default: return state
  }  
};

export default reducer;
  