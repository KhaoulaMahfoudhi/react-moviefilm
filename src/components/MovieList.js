import React from "react";
import MovieCard from "./MovieCard";
// import Filter from "./Filter"

const MovieList = ({ movieList, nameSearch, rateSearch }) => {
  return (
    <div>
      <div className="movie-container">
        {movieList.length > 0 &&
          movieList
            .filter(
              (movie) =>
                movie.title.toLowerCase().includes(nameSearch.toLowerCase()) &&
                movie.rate.toLowerCase().includes(rateSearch.toLowerCase())
            )

            .map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
