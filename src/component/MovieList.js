import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (!filterRating || movie.rating >= filterRating)
  );

  const handleTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setFilterRating(event.target.value);
  };

  const handleResetFilters = () => {
    setFilterTitle("");
    setFilterRating("");
  };

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={handleTitleChange}
        />
        <input
          type="number"
          placeholder="Filter by rating"
          value={filterRating}
          onChange={handleRatingChange}
        />
        <button onClick={handleResetFilters}>Reset Filters</button>
      </div>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
