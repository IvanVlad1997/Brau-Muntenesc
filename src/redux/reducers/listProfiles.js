import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const Profiles = (state = {
    uid : '',
    nume : '',
    nrTel : '',
    ultimaPlata : '',
    istoricPlata : [],
    sumaUltimaPlata : '',
    grupa: '',
    optiuneAbonament: '',
    comentariu: '',
   
}, action) => {
    switch (action.type) {
                
        case ActionTypes.FETCH_USERS:
            return { ..._.mapKeys(action.payload, 'uid')}

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES