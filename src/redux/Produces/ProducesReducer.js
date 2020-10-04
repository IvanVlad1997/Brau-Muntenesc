import * as ActionTypes from './ProducesConstants'
import _ from 'lodash'

export const ProdusReducer = (state = {
    produs: ''
  
}, action) => {
    switch (action.type) {
                
        case ActionTypes.ADAUGA_PRODUS:
            return {...state, produs:[ action.payload]}

       case ActionTypes.FETCH_PRODUS:
             return { ..._.mapKeys(action.payload, 'id')}

        case ActionTypes.DELETE_PRODUS:
             return _.omit(state, action.payload)

        case ActionTypes.EDITEAZA_PRODUS:
              return {...state, produs:[ action.payload]}

        default:
            return state;


        
            
    }   
}
