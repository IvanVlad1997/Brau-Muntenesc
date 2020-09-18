import * as ActionTypes from './ProducesConstants'
import _ from 'lodash'

export const CategorieReducer = (state = {
    categorie: ''
  
}, action) => {
    switch (action.type) {
                
        case ActionTypes.ADAUGA_CATEGORIE:
            return {...state, categorie:[...state.categorie, action.payload]}

       case ActionTypes.FETCH_CATEGORIE:
             return { ..._.mapKeys(action.payload, 'id')}

        case ActionTypes.DELETE_CATEGORIE:
             return _.omit(state, action.payload)

        default:
            return state;


        
            
    }   
}
