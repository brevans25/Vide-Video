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
      `https://api.themoviedb.org/3/discover/movie?api_key=4db4144033ef5a34afbec19191f494c4&year=${year}&language=en-US&page=1`
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
          <h1>
            Enter year to see banners of popular movies in a designated year.
          </h1>
        </div>

        <YearSearch onSearch={this.popularMovies} />

        <div>
          {this.state.popularmovies.map(popularmovie => (
            <ul className="list-unstyled" key={popularmovie.id}>
              <li className="media">
                <img
                  className="mr-3"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
                    popularmovie.poster_path
                  }`}
                  alt={popularmovie.title}
                />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">{popularmovie.original_title}</h5>
                  {popularmovie.overview}
                </div>
              </li>
            </ul>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCuriosities;
