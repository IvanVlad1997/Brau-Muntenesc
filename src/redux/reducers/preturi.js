import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const preturi = (state = {
 
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_PRETURI:
            return { ..._.mapKeys(action.payload, 'id')}

        case ActionTypes.ADAUGA_PRETURI:
            return {...state, [action.payload.id] : action.payload }
           
            case ActionTypes.DELETE_PRETURI:
                return _.omit(state, action.payload)
               
    

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES