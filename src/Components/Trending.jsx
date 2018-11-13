import React, { Component } from "react";
import SearchForm from "./SearchForm";

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
          <SearchForm />
        </div>

        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {this.state.trending.map(trend => (
              //       <div id={trend.id} className="carousel-item">
              //         <img
              //           src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
              //           alt={trend.title}
              //         />
              //         <div className="carousel-caption d-none d-md-block">
              //           <h5>...</h5>
              //           <p>...</p>
              //         </div>
              //       </div>
              //   </div>
              // </div>

              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`}
                  alt={trend.title}
                />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Trending;
