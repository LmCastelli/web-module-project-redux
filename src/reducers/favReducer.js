import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE } from "../actions/movieActions";


const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !displayFavorites
            };
        case ADD_FAVORITE: 
            return {
                ...state,
                favorites: [...state.favorites, movie]
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites.remove(id)]
            };
        default:
            return state;
    }
    
}
export default reducer;