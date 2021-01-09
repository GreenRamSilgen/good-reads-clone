const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export default function loginReducer(state = {loggedIn : false, user: null}, action){
    switch(action.type){
        case LOGIN:
            return {
                loggedIn: true,
                user: action.user
            }
        case LOGOUT:
            return {
                loggedIn: false,
                user: null,
            }
        default:
            return state;
    }
}

//action Creators
export function logInSuccessfully(user){
    return {
        type: LOGIN,
        user
    }
}

export function logOutSuccessfully(){
    return{
        type: LOGOUT
    }
}