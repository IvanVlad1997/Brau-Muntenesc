import * as ActionTypes from './side-nav-constants'



export const SideNavReducer = (state = {
    visible: false
}, action) => {
    switch (action.type) {
        case ActionTypes.TOGGLE_SIDENAV:
            return { ...state, visible: !state.visible }
        default:
            return state
    }
}
