import React, { Component } from "react";
import YearSearch from "./YearSearch";

class MovieCuriosities extends Component {
  constructor() {
    super();
    this.state = {
      popularmovies: []
    };
  }

  popularMovies = year => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4db4144033ef5a34afbec19191f494c4&year=${year}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ popularmovies: responseData.results });
      })
      .catch(error => {
        console.log("There was an error fetching and parsing data", error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Enter year to see banners of popular movies in that year.</h1>
        </div>

        <YearSearch onSearch={this.popularMovies} />

        <div>
          {this.state.popularmovies.map(pop => (
            <div key={pop.id}>
              <img
                src={`http://image.tmdb.org/t/p/w500${pop.poster_path}`}
                alt={pop.title}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCuriosities;
