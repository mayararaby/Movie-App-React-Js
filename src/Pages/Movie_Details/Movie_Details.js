import React, { useEffect } from 'react'
import './Movie_Details.css'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getMoviesDetails } from "../../redux/actions/movies";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MovieDetailsLeftCard from '../../Components/MovieDetailsLeftCard/MovieDetailsLeftCard'
import MovieDetailsRightSide from '../../Components/MovieDetailsRightSide/MovieDetailsRightSide'


function MovieDetails(props) {
    const GetAllMovies = useSelector((state) => state.GetAllMovies.movieDetails)
    const params = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMoviesDetails(params.id))
    }, []);
    console.log(GetAllMovies);
    return (
        <Container id="body">
            <Row>
                <div className="col-sm-12 col-md-3">
                    <MovieDetailsLeftCard LeftCard={GetAllMovies} />
                </div>
                <div className="col-sm-12 col-md-9">
                    <MovieDetailsRightSide RightCard={GetAllMovies}/>
                </div>
            </Row>
        </Container>
    );
}

export default MovieDetails