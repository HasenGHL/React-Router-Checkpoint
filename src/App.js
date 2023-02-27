import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieCard from "./component/MovieCard";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import MovieDetails from "./component/MovieDetails";

const App = (match) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rating: 8.5,
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
      rating: 9,
      trailer: "https://www.youtube"
    },
    {
      id: 3,
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      rating: 9.2,
      trailer: "https://www.youtube.com/embed/sY1S34973zA",
    },
  ]);

  const handleAddMovie = (newMovie) => {
  setMovies([...movies, newMovie]);
  };
  
  const handleTitleFilterChange = (event) => {
  setFilterTitle(event.target.value);
  };
  
  const handleRatingFilterChange = (event) => {
  setFilterRating(event.target.value);
  };
  
  const filteredMovies = movies.filter(
  (movie) =>
  movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
  movie.rating >= filterRating
  );
  
  return (
  <Router>
  <div className="container">
  <Routes>
  <Route path="/movies/:id">
  <MovieDetails movie={movies.find(movie => movie.id === parseInt(match.params.id))} />
  </Route>
  <Route path="/">
  <Filter
             title={filterTitle}
             rating={filterRating}
             onTitleChange={handleTitleFilterChange}
             onRatingChange={handleRatingFilterChange}
           />
  <MovieList movies={filteredMovies} onAddMovie={handleAddMovie} />
  </Route>
  </Routes>
  </div>
  </Router>
  );
  };
  
  export default App;    