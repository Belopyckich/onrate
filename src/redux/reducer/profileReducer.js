const initialState = {
    gender: null,
    name: { first: null, last: null },
    dob: { date: null, age: null },
    login: { username: null, password: null },
    email: null,
    location: {
        city: null,
        state: null,
        country: null
    },
    phone: null,
    picture: { large: null },
    registered: { date: null },
    isAuth: false,
    photos: [],
    friends: [],
}

export const SET_PROFILE = "SET_PROFILE";
export const SET_PROFILE_PHOTO = "SET_PROFILE_PHOTO";
export const ADD_INFO = "ADD_INFO";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const ADD_PHOTO = "ADD_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            console.log(action.payload.username);
            return { ...state, 
                isAuth: true, 
                login: { ...state.login, username: action.payload.username, password: action.payload.password }, 
                registered: { ...state.registered, date: new Date() } 
            };
        
        case ADD_INFO:
            return {
                ...state,
                gender: action.payload.gender,
                name: {...state.name, first: action.payload.firstname, last: action.payload.lastname},
                dob: {...state.dob, date: action.payload.date, age: action.payload.age},
                email: action.payload.email,
                location: {...state.location, city: action.payload.city, state: action.payload.state, country: action.payload.country},
                phone: action.payload.phone,
            }
        case SET_PROFILE_PHOTO:
            return {...state, picture: {...state.picture, large: action.payload}}
        case ADD_FRIEND:
            return { ...state, friends: [...state.friends, action.payload] }
        case REMOVE_FRIEND:
            return { ...state, friends: state.friends.filter(friend => friend !== action.payload) }
        case ADD_PHOTO:
            return { ...state, photos: [...state.photos, action.payload] }
        case REMOVE_PHOTO:
            return { ...state, photos: state.photos.filter(photo => photo !== action.payload) };
        default:
            return state;
    }
}

export default profileReducer;