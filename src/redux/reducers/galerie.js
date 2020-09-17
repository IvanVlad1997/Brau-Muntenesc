import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const Galerie = (state = {
 
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_GALERIE:
            return { ..._.mapKeys(action.payload, 'id')}

            case ActionTypes.DELETE_GALERIE:
                return _.omit(state, action.payload)
               
            case ActionTypes.ADAUGA_GALERIE:
                    return {...state, [action.payload.id] : action.payload }
                  

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES