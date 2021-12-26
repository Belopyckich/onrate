import {api} from "../../api/api";

const initialState = {
    users: {},
    friends: []
}

export const ADD_USERS = "ADD_USERS";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND"

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USERS:
            return {...state, users: action.payload}
        case ADD_FRIEND:
            return {...state, friends: [...state.friends, action.payload]}
        case REMOVE_FRIEND:
            return {...state, friends: state.friends.filter(friend => friend !== action.payload)}
        default:
            return state; 
    }
}

export const getUsersThunk = () => (dispatch) => {
    return api.getUsers().then(users => dispatch({type: ADD_USERS, payload: users}));
}

export default UserReducer;