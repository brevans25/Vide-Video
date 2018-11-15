import React, { Component } from "react";

class Trending extends Component {
  constructor() {
    super();
    this.state = {
      trending: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=4db4144033ef5a34afbec19191f494c4"
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ trending: responseData.results });
      })
      .catch(error => {
        console.log("There was an error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Now Trending...</h1>
        </div>

        <div>
          {this.state.trending.map(trend => (
            <div id={trend.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                alt={trend.title}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Trending;
