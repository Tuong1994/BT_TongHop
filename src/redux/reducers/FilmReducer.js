const stateDefault = {
    arrFilm: [],
    FilmDetail: {},
}

export const FilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_MOVIE_LIST' : {
            state.arrFilm = [...action.arrFilm];
            return {...state}
        }
        case 'GET_MOVIE_DETAIL' : {
            state.FilmDetail = action.FilmDetail;
            return {...state};
        }
        default : return{...state};
    }
}