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
    fetch(
      "https://api.themoviedb.org/3/search/movie? &api_key=4db4144033ef5a34afbec19191f494c4&language=en-US&page=1&include_adult=false"
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
      <div>
        <SearchForm />
      </div>
    );
  }
}

export default Catalog;
