import React from "react";

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to VideVideo</h1>
      <p className="lead">
        VideVideo was, back in the 90s, the biggest rental service in Anapolis,
        my hometown in Brazil. As a kid, I spent several hours browsing through
        their collection of video tapes and eventually, DVDs.
        <br />
        With the increasing popularity of streaming services, VideVideo closed
        its doors in 2017 without having a website where you could go and rent
        movies without leaving the house. Now they have it!
      </p>
      <hr className="my-4" />
      <p>
        In the VideVideo catalog, you can find a large selection of movies and
        rent them!
      </p>
      <a className="btn btn-primary btn-lg" href="/" role="button">
        Browse Catalog
      </a>
    </div>
  );
};

export default Home;
