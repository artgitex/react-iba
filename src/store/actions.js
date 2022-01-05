import * as actionTypes from './types';

export const onCardChecked = (id, status) => dispatch => dispatch({
    type: actionTypes.CARDCHECKED,
    id: id,
    status: status    
}) 

export const onCardUpdated = (id, header, body) => dispatch => dispatch({
    type: actionTypes.UPDATECARD,
    id: id,
    headerText: header,
    bodyText: body    
})

export const onViewOnlyAction = () => dispatch => dispatch({
    type: actionTypes.VIEWONLY
}) 

export const onAddNewCard = () => dispatch => dispatch({
    type: actionTypes.ADDCARD
}) 

export const onRemoveCard = () => dispatch => dispatch({
    type: actionTypes.REMOVECARD
}) 

export const onSubmit = (val) => dispatch => dispatch({
    type: actionTypes.SUBMIT,
    value: val
}) 

export const onCheckValidityForm = (val) => dispatch => dispatch({
    type: actionTypes.VALIDATE_FORM,
    value: val
}) 

export const onFillCardData = (val) => dispatch => dispatch({
    type: actionTypes.FILLCARD,
    value: val
}) 

export const onError = (val) => dispatch => dispatch({
    type: actionTypes.ERROR,
    value: val
}) 
