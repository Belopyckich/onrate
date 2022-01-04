const initialState = {
    users: [],
}

export const FETCH_USERS = "FETCH_USERS";
export const ADD_USERS = "ADD_USERS";

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_USERS:
            return {...state, users: action.payload }
        default:
            return state; 
    }
}

export const addUsers = payload => ({type: ADD_USERS, payload})
export const fetchUsers = () => ({type: FETCH_USERS})

export default UsersReducer;