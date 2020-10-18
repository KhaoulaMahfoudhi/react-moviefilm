import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { MoviesData } from "./MoviesData";
import Button from 'react-bootstrap/Button';

 function TrailerMovie({match}) {
  const movievd = MoviesData.find(({ title }) => title === match.params.title);
  return (
   
     <div className="video">
        <ReactPlayer url={movievd.video}  />
        <div className="text">
          <h2> overview: </h2>
          <p>{movievd.description}</p>
          </div>
          <Link to="/">
          <Button variant="info">Home</Button>
          </Link>
        
      </div>
      
  );
};
export default TrailerMovie;