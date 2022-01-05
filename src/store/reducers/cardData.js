import * as actionTypes from '../types';

const initialState = {
    cards: [],
    cardsLoaded: false,
    error: false,
    onlyView: false,
    cardsChecked: []
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FILLCARD:
            return {
                ...state,
                cards: action.value,
                cardsLoaded: true
            }            
        case actionTypes.ERROR: 
            return {
                ...state,
                error: action.value
            }
        case actionTypes.VIEWONLY: 
            return {
                ...state,
                onlyView: !state.onlyView
            }
        case actionTypes.ADDCARD:            
            let lastCard = state.cards[state.cards.length-1] || {id: '001'};
            let newCard = {id: String((+lastCard.id + 1)), headerText: 'This is new Card', bodyText: 'I expect some text here...'};            

            return {
                ...state,
                cards: state.cards.concat(newCard)
            }
        case actionTypes.UPDATECARD:
            let cards = [...state.cards]
            let ind = cards.findIndex(val => val.id === action.id);
            cards[ind] = {id: action.id, headerText: action.headerText, bodyText: action.bodyText};            

            return {
                ...state,
                cards: cards
            }
        case actionTypes.CARDCHECKED:
            let currList = [...state.cardsChecked];

            if (action.status) {
                currList.push(action.id)
            } else {                
                currList = currList.filter(val => val!==action.id);                
            }           

            return {
                ...state,
                cardsChecked: currList
            }       
        case actionTypes.REMOVECARD:
            return {
                ...state,
                cards: state.cards.filter(val => !state.cardsChecked.includes(val.id))
            }
        
        default: return state
    }
}

export default reducer;
