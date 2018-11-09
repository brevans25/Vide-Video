import React, { Component } from "react";
import SearchForm from "./SearchForm";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      movies: {}
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=avengers&api_key=4db4144033ef5a34afbec19191f494c4&language=en-US&page=1&"
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ movies: responseData });
      })
      .catch(error => {
        console.log("There was an error fetching and parsing data", error);
      });
  }

  render() {
    console.log(this.state.movies);
    return (
      <React.Fragment>
        <div className="main-title">
          <h1>Search for Movie</h1>
          <SearchForm />
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Available</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>oi</td>
              <td>vaca</td>
              <td>Hi</td>
              <td>There</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Catalog;
