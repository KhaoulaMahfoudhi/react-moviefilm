
import React from "react";

const MovieCard = ({ movie: {title, description, posterUrl, rate}, }) => {
  return (
    <div className="movie">
      <img
        src={posterUrl}
        alt={title}
        data-sizes="auto"
      />
      <div className="movie-desc">
        <h3>{title}</h3>
        <span>{rate}</span>
      </div>
      <div className="Movie-over">
        <h2>overview: </h2>
  <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
