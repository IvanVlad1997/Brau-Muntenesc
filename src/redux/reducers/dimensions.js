import * as ActionTypes from '../actions/ActionTypes'
import _ from 'lodash'

export const Dimensiuni = (state = {
 width: window.innerWidth,
 height: window.innerHeight
   
}, action) => {
    switch (action.type) {
        
        case ActionTypes.SCHIMBA_DIMENSIUNI:
            return { ...state, width: action.payload.width, height: action.payload.height}

      
    

        

        default:
            return state;


        
            
    }   
}

//FETCH_PROFILES