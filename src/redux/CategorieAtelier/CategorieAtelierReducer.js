import * as ActionTypes from '../CategorieAtelier/CategorieAtelierConstants'


export const CategorieReducer = (state = {
    numeCategorie: []
  
}, action) => {
    switch (action.type) {
                
        case ActionTypes.ADAUGA_CATEGORIE:
            return {...state, categorie: [...state.categorie, action.payload]}

        

        default:
            return state;


        
            
    }   
}
