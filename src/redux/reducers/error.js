import * as ActionTypes from '../actions/ActionTypes'


export default (state = {error:false}, action) => {
    switch (action.type) {
case ActionTypes.FAIL:
    return {...state, error: action.payload}
    default:
    return state;
}
}