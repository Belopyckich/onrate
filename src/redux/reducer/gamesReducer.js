const initialState = {
    games: []
}

export const SET_GAMES = "SET_GAMES";
export const FETCH_GAMES = "FETCH_GAMES";

const GamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {...state, games: action.payload};    
        default:
            return state;
    }
}

export default GamesReducer;

export const fetchGames = () => ({type: FETCH_GAMES})
export const setGames = payload => ({type: SET_GAMES, payload: payload}) 