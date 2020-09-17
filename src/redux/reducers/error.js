import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'


export default (state = {error:false}, action) => {
    switch (action.type) {
case ActionTypes.FAIL:
    return {...state, error: action.payload}
    default:
    return state;
}
}