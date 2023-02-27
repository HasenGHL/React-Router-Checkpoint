import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={movie.posterURL} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span>{movie.rating}</span>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

