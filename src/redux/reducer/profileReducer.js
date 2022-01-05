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
    album: [],
    friends: [],
    games: [],
}

export const FETCH_PROFILE_PHOTO = "FETCH_PHOTO";
export const SET_PROFILE = "SET_PROFILE";
export const SET_PROFILE_PHOTO = "SET_PROFILE_PHOTO";
export const ADD_INFO = "ADD_INFO";
export const ADD_FRIEND = "ADD_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const ADD_PHOTO_IN_ALBUM = "ADD_PHOTO_IN_ALBUM";
export const REMOVE_PHOTO_FROM_ALBUM = "REMOVE_PHOTO_FROM_ALBUM";

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return { ...state, 
                isAuth: true, 
                login: { ...state.login, username: action.payload.username, password: action.payload.password }, 
                registered: { ...state.registered, date: new Date().toISOString().slice(0,10) } 
            };
        
        case ADD_INFO:
            return {
                ...state,
                gender: action.payload.gender,
                name: {...state.name, first: action.payload.firstname, last: action.payload.lastname},
                dob: {...state.dob, date: action.payload.date.toISOString().slice(0,10), age: action.payload.age},
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
        case ADD_PHOTO_IN_ALBUM:
            return { ...state, album: [...state.album, action.payload] }
        case REMOVE_PHOTO_FROM_ALBUM:
            return { ...state, album: state.album.filter(photo => photo !== action.payload) };
        default:
            return state;
    }
}

export const fetchProfilePhoto = () => ({type: FETCH_PROFILE_PHOTO});
export const setProfilePhoto = payload => ({type: SET_PROFILE_PHOTO, payload: payload});

export default profileReducer;