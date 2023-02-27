import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="trailer">
        <iframe
          title={movie.title}
          width="560"
          height="315"
          src={movie.trailer}
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetails;
