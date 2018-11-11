import React, { Component } from "react";
import SearchForm from "./SearchForm";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

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

  render() {
    console.log(this.state.movies);
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
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr>
                <td>{movie.id}</td>
                <td>{movie.original_title}</td>
                <td>{movie.popularity}</td>
                <td>{movie.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Catalog;
