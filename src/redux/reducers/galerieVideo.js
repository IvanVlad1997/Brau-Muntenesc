import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const GalerieVideo = (state = {
 
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_GALERIEVIDEO:
            return { ..._.mapKeys(action.payload, 'id')}

        case ActionTypes.ADAUGA_GALERIEVIDEO:
            return {...state, [action.payload.id] : action.payload }
           
            case ActionTypes.DELETE_GALERIEVIDEO:
                return _.omit(state, action.payload)
               
    

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES