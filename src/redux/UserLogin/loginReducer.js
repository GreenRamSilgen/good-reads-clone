import * as loginActions from './loginActions';

export default function loginReducer(state = {loggedIn : false, user: null}, action){
    switch(action.type){
        case loginActions.LOGIN:
            return {
                loggedIn: true,
                user: action.user
            }
        case loginActions.LOGOUT:
            return {
                loggedIn: false,
                user: null,
            }
        default:
            return state;
    }
}