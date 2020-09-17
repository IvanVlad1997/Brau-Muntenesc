import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const videoYT = (state = {
 
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_VIDEO:
            return { ..._.mapKeys(action.payload, 'id')}

        case ActionTypes.ADAUGA_VIDEO:
            return {...state, [action.payload.id] : action.payload }
           
            case ActionTypes.DELETE_VIDEO:
                return _.omit(state, action.payload)
               
    

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES