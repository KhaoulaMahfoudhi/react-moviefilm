import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import SearchMovie from "./components/SearchMovie";
import { MoviesData } from "./components/MoviesData";

function App() {
  const [movieList, setMovieLiset] = useState(MoviesData);
  const [nameSearch, setNameSearch] = useState("");
  const [rateSearch, setRateSearch] = useState("");
  const addMovie = (newMovie) => {
    setMovieLiset([...movieList, newMovie]);
  };
  return (
    <div>
      <AddMovie addMovie={addMovie} />
      <br />
      <SearchMovie
        setNameSearch={setNameSearch}
        setRateSearch={setRateSearch}
      />
      <br />
      <MovieList
        movieList={movieList}
        nameSearch={nameSearch}
        rateSearch={rateSearch}
      />
    </div>
  );
}

export default App;
