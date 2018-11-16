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
            <ul className="list-unstyled" key={trend.id}>
              <li className="media">
                <img
                  className="mr-3"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
                    trend.poster_path
                  }`}
                  alt={trend.title}
                />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">{trend.original_title}</h5>
                  {trend.overview}
                </div>
              </li>
            </ul>
          ))}
        </div>

        {
          //This will render a beautiful carousel to render the banners in the future
          /* <div>
          {this.state.trending.map((trend, index) => (
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
              key={trend.id}
            >
              <div
                className="carousel-inner"
                {...(index === 0 ? "active" : "")}
              >
                <div className="carousel-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
                      trend.poster_path
                    }`}
                    alt={trend.title}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{trend.original_title}</h5>
                    <p>{trend.overview}</p>
                  </div>
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          ))}
        </div> */
        }
      </React.Fragment>
    );
  }
}

export default Trending;
