import React, { Component } from "react";
import SearchForm from "./SearchForm";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      available: [],
      prices: [2.99, 4.99, 6.99],
      moviecount: 0
    };
  }

  //For the AVAILABLE column
  isAvailable = () => {
    let randomAvailable = Math.random() >= 0.5;
    return randomAvailable ? "Available" : "Not Available";
  };

  componentDidMount() {
    //Show Trending component here, when the page loads!
  }

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

  handleAdd = movie => {
    this.setState({ moviecount: this.state.moviecount + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="main-title">
          <h1>Search for Movie</h1>
          <SearchForm onSearch={this.doSearch} />
        </div>

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
            {this.state.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.original_title}</td>
                <td>{this.isAvailable()}</td>
                <td>{movie.poster_path}</td>
                <td>
                  <button
                    onClick={() => this.handleAdd(movie)}
                    className="btn btn-primary btn-sm"
                  >
                    Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Catalog;
