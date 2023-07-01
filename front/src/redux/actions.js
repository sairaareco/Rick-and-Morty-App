export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorite = (character) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/rickandmorty/fav', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({character})
            });
            const data = await response.json();
            dispatch({ type: ADD_FAVORITE, payload: data });
        } catch (error) {
            console.log(error);
        }
    }
};

export const deleteFavorite = (apiId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3001/rickandmorty/fav/${apiId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({apiId})
            })
            const data = await response.json();
            dispatch({ type: DELETE_FAVORITE, payload: apiId });
        } catch (error) {
            console.log(error)
        }        
    }
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender}
};

export const orderCards = (id) => {
    return { type: ORDER, payload: id}
};

