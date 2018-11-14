import React, { Component } from "react";
import SearchForm from "./SearchForm";

class NewCatalog extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="main-title">
          <h1>Search for Movie</h1>
          <SearchForm onSearch={this.doSearch} /> //THE PROBLEM IS HERE!
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
                <td>{movie.available}</td>
                <td>{movie.price}</td>
                <td>
                  <button
                    onClick={() => this.handleAdd(movie)}
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
          </tbody>
        </table>
      </React.Fragment>
    );
  }

  //This helper function will update the movie count.If moviecount != 0, counter will show the amount of movies added
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

export default NewCatalog;
