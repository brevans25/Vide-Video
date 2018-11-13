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

        {this.state.trending.map(trend => (
          <div id={trend.id} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={`http://image.tmdb.org/t/p/w185${trend.poster_path}`}
                  alt={trend.title}
                />
              </div>
            </div>
          </div>
        ))}

        {/* <div id={trend.id} classNameName="carousel slide" data-ride="carousel">
            <div classNameName="carousel-inner">
              <div classNameName="carousel-item active">
                <img
                  classNameName="d-block w-100"
                  src=
                  alt={trend.title}
                />
              </div>
              <a
                classNameName="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  classNameName="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span classNameName="sr-only">Previous</span>
              </a>
              <a
                classNameName="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  classNameName="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span classNameName="sr-only">Next</span>
              </a>
            </div>
          </div>

          // <div classNameName="carousel-item" key={trend.id}>
          //     <img src={trend.poster_path} alt={trend.title} />
          //     <div classNameName="carousel-caption d-none d-md-block">
          //     <h5>{trend.original_title}</h5>
          //     <p>{trend.overview}</p>
          //     </div>
          // </div> */}
      </React.Fragment>
    );
  }
}

export default Trending;
