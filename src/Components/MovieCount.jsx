import React, { Component } from "react";

class MovieCount extends Component {
  state = {};
  render() {
    return (
      <span className={this.badgeClassUpdate()}>{this.formatMovieCount()}</span>
    );
  }
}

export default MovieCount;
