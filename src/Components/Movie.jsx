import React, { Component } from "react";

const Movie = props => (
  <li className="movie-wrap" key={movie.id}>
    Title: {movie.original_title}
  </li>
);

export default Movie;
