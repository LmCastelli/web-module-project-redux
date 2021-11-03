export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}

export const addMovie = (movie)=> {
    return ({type: ADD_MOVIE, payload:movie})
}

export function toggleFavorites() {
    return({type: TOGGLE_FAVORITES});
}

export const addFavorites = (movie) => {
    return ({type: ADD_FAVORITES, payload:movie})
}

export const removeFavorites = (id) => {
    return({type: REMOVE_FAVORITE, payload:id})
}