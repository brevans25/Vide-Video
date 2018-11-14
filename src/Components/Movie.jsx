import React, { Component } from "react";
import SearchForm from "./SearchForm";

class Movie extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      prices: [2.99, 4.99, 6.99],
      moviecount: 0
    };
  }
  //For the AVAILABLE column
  isAvailable = () => {
    let randomAvailable = Math.random() >= 0.5;
    return randomAvailable ? "Available" : "Not Available";
  };

  doSearch = query => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=4db4144033ef5a34afbec19191f494c4&language=en-US&page=1&`
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ movies: responseData.results });
      })
      .catch(error => {
        console.log("There was an error fetching and parsing data", error);
      });
  };

  handleAdd = () => {
    this.setState({
      moviecount: this.state.moviecount + 1
    });
  };

  render() {
    console.log("props", this.props);

    return (
      <React.Fragment>
        {this.state.movies.map(movie => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.original_title}</td>
            <td>{this.isAvailable()}</td>
            <td>
              {
                this.state.prices[
                  Math.floor(Math.random() * this.state.prices.length)
                ]
              }
            </td>
            <td>
              <button
                onClick={() => this.handleAdd(this.props.movie)}
                className="btn btn-primary btn-sm"
                disabled={
                  this.isAvailable === "Not Available" ? "disabled" : ""
                }
              >
                Add
              </button>
            </td>
          </tr>
        ))}
      </React.Fragment>
    );
  }
}

export default Movie;
