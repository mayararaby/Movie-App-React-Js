import axios from 'axios'
import { GETALLMOVIES, GET_MOVIES_DETAILS } from '../type'


export const GetMovies = ()=> {
    return(dispatch) =>{
        axios
        .get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c")
        .then( (response)=>{
            dispatch({
                type : GETALLMOVIES,
                payload : response.data.results
            })
        })
        .catch(
            (err) => console.log(err) 
        )
    }
}

export const getMoviesDetails = (id)=> {
    return(dispatch) =>{
        axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c`)
        .then( (response)=>{
            dispatch({
                type : GET_MOVIES_DETAILS,
                payload : response.data
            })
        })
        .catch(
            (err) => console.log(err) 
        )
    }
}