import React, { useEffect } from 'react'
import './Movie.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useSelector, useDispatch } from "react-redux";
import OneMovie from '../../Components/MovieCard/MovieCard'
import {GetMovies} from '../../redux/actions/movies';


const DisplayMovies = (props) => {
    const GetAllMovies = useSelector((state) => state.GetAllMovies.ListOfMovies)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetMovies());
    }, []);
    return (
        <Container id="body">
            <Row>
                <div className="row my-4">
                    {GetAllMovies.map((GetAllMovies, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            < OneMovie GetAllMovies={GetAllMovies} />
                        </div>
                    ))}
                </div>
            </Row>
        </Container>
    );
}

export default DisplayMovies