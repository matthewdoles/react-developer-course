import * as actionTypes from '../actions/actionTypes'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => action.resultElId !== result.id) 
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state
    } 
}

export default reducer