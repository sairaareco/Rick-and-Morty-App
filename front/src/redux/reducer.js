import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [ ...payload],
                allCharacters: [ ...payload]
            };
            
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.apiId !== payload)
            };
            
        case FILTER:
            const filtered = state.allCharacters.filter((char)=> char.gender === payload)
            return {
                ...state, 
                myFavorites: filtered 
            };
            
        case ORDER:
            const allCharactersCopy = [...state.allCharacters];
            
            return {
                ...state,
                myFavorites: payload === "ASCENDENTE" ?
                allCharactersCopy.sort((a, b) => a.id - b.id ) :
                allCharactersCopy.sort((a, b) => b.id - a.id)
            };
            
        default:
            return { ...state };
    }
};

export default reducer;