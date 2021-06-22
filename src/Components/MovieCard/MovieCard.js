import React from "react";
import { Link } from "react-router-dom";
import './MovieCard.css'

export default function OneMovie({ GetAllMovies }) {
    let Overview = (GetAllMovies.overview).substr(0, 90);
    return (
        <div className="card mt-5 ml-3 card-height">
            <div className="containerImg">
            <Link to={`/movieDetails/${GetAllMovies.id}`}>
                <img className="card-img-top imgCard" src={`https://image.tmdb.org/t/p/w500/${GetAllMovies.poster_path}`} alt="Card image" />
            </Link>
            </div>
            <div className="card-body text-center">
                <h4 className="card-title font-weight-bold">{GetAllMovies.title}</h4>
                <p className="card-text">{Overview}....</p>
                <p>
                    <Link to={`/movieDetails/${GetAllMovies.id}`} className="linkDetails"> 
                        <span class="badge badge-info">Read more</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

