import * as ActionTypes from '../actions/ActionTypes'

export const AuthUser = (state = {
    isLoading: false,
    isLoggedin: false,
    email: '',
    userName: '',
    token: '',
    LoggedWith: '',
    uid: '',
    persistance: '',
   
}, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state,
                isLoading: true,
                isLoggedin: false,
                email: '',
                userName: '',
                token: '',
                LoggedWith: '',
                uid: '',
                persistance: '',
                errMess: null,
         
            }
         case ActionTypes.LOGIN_SUCCESS:
            return {...state,
                isLoading: false,
                isLoggedin: true,
                email: action.payload.email,
                userName: action.payload.displayName,
                token: action.payload.token,
                LoggedWith: action.payload.method,
                uid: action.payload.uid,
                persistance: action.payload.persistance,
                errMess: null,
    
            }
         case ActionTypes.LOGIN_FAILURE:
            return {...state,
                isLoading: false,
                isLoggedin: false,
                email: '',
                userName: '',
                token: '',
                LoggedWith: '',
                uid: '',
                persistance: '',
                errMess: action.payload.message,
      
            }
         case ActionTypes.LOGOUT_REQUEST:
            return {...state,
                isLoading: true,
                }
         case ActionTypes.LOGOUT_SUCCESS:
            return {...state,
                isLoading: false,
                isLoggedin: false,
                email: '',
                userName: '',
                token: '',
                LoggedWith: '',
                uid: '',
                persistance: '',
                errMess: null,

            }
         case ActionTypes.LOGOUT_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.payload.message}
           
                
         case ActionTypes.SINGUP_REQUEST:
            return {...state,
                isLoading: true,
                
                errMess: null}
         case ActionTypes.SINGUP_SUCCESS:
            return {...state,
                isLoading: false,
                
                
                errMess: null}
         case ActionTypes.SINGUP_FAILURE:
            return {...state,
                isLoading: false,
                
                errMess: action.payload.message
               }
        case ActionTypes.FETCH_USER:
             return {...state,
                isLoading: false,
                isLoggedin: true,
                email: action.payload.email,
                userName: action.payload.displayName,
                token: action.payload.token,
                LoggedWith: action.payload.method,
                uid: action.payload.uid,
                persistance: action.payload.persistance,
                errMess: null}  
        

        

        default:
            return state;


        
            
    }   
}