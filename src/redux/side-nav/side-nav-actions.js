import * as ActionTypes from "../side-nav/side-nav-constants";

export const toggleSideBar = () => dispatch => {
        console.log('asdadwad')
        dispatch({type: ActionTypes.TOGGLE_SIDENAV});
}
