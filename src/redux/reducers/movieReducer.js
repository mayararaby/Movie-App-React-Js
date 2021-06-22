import { GETALLMOVIES, GET_MOVIES_DETAILS } from '../type'

const INITIAL_STATE = {
    ListOfMovies: [],
    movieDetails: {},
}

export default function GetAllMovies (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GETALLMOVIES:
            return {
              ...state,
              ListOfMovies: action.payload,
            };
          case GET_MOVIES_DETAILS:
            return {
              ...state,
              movieDetails: action.payload,
            };
        default:
            return state;
    }
}

