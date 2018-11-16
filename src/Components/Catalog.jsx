import React, { Component } from "react";
import SearchForm from "./SearchForm";
import MovieCount from "./MovieCount";
import Trending from "./Trending";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      prices: [2.99, 4.99, 6.99],
      selectedmovies: JSON.parse(
        localStorage.getItem("selected-movies") || "[]"
      ),
      moviecount: 0
    };
  }

  //For the AVAILABLE column
  isAvailable = () => {
    let randomAvailable = Math.random() >= 0.5;
    return randomAvailable ? "Available" : "Not Available";
  };

  //For the PRICE column
  getPrice = () => {
    const randomPrice = this.state.prices[
      Math.floor(Math.random() * this.state.prices.length)
    ];
    return randomPrice;
  };

  //This helper function will handle the ADD button
  handleAdd = movie => {
    const selectedmovies = [...this.state.selectedmovies, movie];
    const moviecount = this.state.moviecount + 1;

    this.setState({
      moviecount,
      selectedmovies
    });

    localStorage.setItem("selected-movies", JSON.stringify(selectedmovies));

    console.log(moviecount);
  };

  doSearch = query => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=4db4144033ef5a34afbec19191f494c4&language=en-US&page=1&`
    )
      .then(response => response.json())
      .then(responseData =>
        responseData.results.map(movie => {
          movie.available = this.isAvailable();
          movie.price = this.getPrice();
          return movie;
        })
      )
      .then(movies => {
        this.setState({ movies: movies });
      })
      .catch(error => {
        console.log("There was an error fetching and parsing data", error);
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <React.Fragment>
        <div className="main-title">
          <h1>Search for Movie</h1>
          <span className={this.badgeClassUpdate()}>
            {this.formatMovieCount()}
          </span>
          <SearchForm onSearch={this.doSearch} />
        </div>

        {!movies || (!movies.length && <Trending />)}

        {movies && movies.length && (
          <table className="table">
            <thead>
              <tr>
                <th>#id</th>
                <th>Title</th>
                <th>Available</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.original_title}</td>
                  <td>{movie.available}</td>
                  <td>{movie.price}</td>
                  <td>
                    {console.log(movie)}
                    <button
                      onClick={() => this.handleAdd(movie)}
                      className="btn btn-primary btn-sm"
                      disabled={
                        movie.available === "Available" ? undefined : "disabled"
                      }
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </React.Fragment>
    );
  }

  formatMovieCount() {
    const { moviecount } = this.state; //object Destructuring
    return moviecount === 0 ? "" : moviecount;
  }

  badgeClassUpdate() {
    let movieCountClass = "badge m-2 badge-";
    movieCountClass += this.state.moviecount === 0 ? "warning" : "primary";
    return movieCountClass;
  }
}

export default Catalog;
