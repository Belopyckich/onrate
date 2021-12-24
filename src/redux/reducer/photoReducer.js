
const initialState = {
    photos: []
}

export const ADD_PHOTO = "ADD_PHOTO";

export const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PHOTO:
            return {...state, photos: [...state.photos, action.payload]}

        default:
            return state;
    }
}

export default photoReducer;