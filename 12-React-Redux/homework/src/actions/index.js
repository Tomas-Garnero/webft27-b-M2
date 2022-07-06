export function getMovies(title) {
    return function(dispatch){
        return fetch("http://www.omdbapi.com/?apikey=tuApiKey&s=98fc67a0" + title)
            .then(response => response.jason())
            .then(movies => dispatch({type: "GET_MOVIES", payload: movies}))
    }
}

export function getMovieDetail(id){
    return function(dispatch){
        return fetch("http://www.omdbapi.com/?apikey=tuApiKey&s=98fc67a0" + id)
            .then(response => response.json())
            .then(detail => dispatch({type: "GET_MOVIE_DETAIL", payload: detail}))
    }
}

export function addMovieFavorite(movie){
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload: movie
    }
}

export function removeMovieFavorite(id){
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: id
    }
}