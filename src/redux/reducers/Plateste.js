import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const Plati = (state = {
    date: null,
    platitPanaLa: null,
    ultimaPlata : '',
    istoricPlata : [],
    sumaUltimaPlata : '',
    optiuneAbonament: '',
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.FETCH_PLATI:
            return { ..._.mapKeys(action.payload, 'uid')}

        case ActionTypes.PLATESTE:
            return {...state, [action.payload.id] : action.payload }
           

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES