import React, { Component } from "react";

class MovieCount extends Component {
  state = {
    moviecount: 0
  };
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
  render() {
    return (
      <span className={this.badgeClassUpdate()}>{this.formatMovieCount()}</span>
    );
  }
}

export default MovieCount;
