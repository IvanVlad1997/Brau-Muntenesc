import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const GalerieVideoEvenimente = (state = {
 
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_GALERIEVIDEOEVENIMENTE:
            return { ..._.mapKeys(action.payload, 'id')}

        case ActionTypes.ADAUGA_GALERIEVIDEOEVENIMENTE:
            return {...state, [action.payload.id] : action.payload }
           
            case ActionTypes.DELETE_GALERIEVIDEOEVENIMENTE:
                return _.omit(state, action.payload)
               
    

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES