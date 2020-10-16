import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import SearchMovie from "./components/SearchMovie";
import TrailerMovie from "./components/TrailerMovie";
import Home from "./components/Home"
import { MoviesData } from "./components/MoviesData";
import { Route, Switch } from "react-router-dom";


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
     
<Switch>
<div style={{ width: 1000, margin: "0 auto" }}>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/trailerMovie/:title" component={TrailerMovie} />
        {/* <Route patch="/moviecard" component={MovieCard} />  */}
      </div>
</Switch>
      
    </div>
  );
}

export default App;
