import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const program = (state = {
 
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_PROGRAMS:
            return { ..._.mapKeys(action.payload, 'id')}

        case ActionTypes.ADAUGA_PROGRAM:
            return {...state, [action.payload.id] : action.payload }
           
            case ActionTypes.DELETE_PROGRAM:
                return _.omit(state, action.payload)
               
    

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES