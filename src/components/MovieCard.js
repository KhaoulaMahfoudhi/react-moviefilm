import React from "react";
 import { Link } from "react-router-dom";


const MovieCard = ({ movie: {  title, posterUrl, rate, description} }) => {
  return (
    <Link to={`/trailermovie/${title}`}>
      <div className="movie">
        <img src={posterUrl} alt={title} data-sizes="auto" />
        <div className="movie-desc">
          <h3>{title}</h3>
          <span>{rate}</span>
        </div>
        <div className="Movie-over">
          <h2> OverView: </h2>
          <p>{description}</p>
        </div>
      </div>
      </Link>
  );
};

export default MovieCard;
