import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import SearchMovie from "./components/SearchMovie";
import TrailerMovie from "./components/TrailerMovie";
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
     
<Switch>
<div style={{ width: 1000, margin: "0 auto" }}>
        <hr />
        <Route exact path="/" render={(props) => <MovieList  movieList={movieList} nameSearch={nameSearch} rateSearch={rateSearch}/>}/>
        <Route path="/trailerMovie/:title" component={TrailerMovie} />
      </div>
</Switch>
      
    </div>
  );
}

export default App;
