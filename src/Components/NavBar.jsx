import React from "react";
import { Link, NavLink } from "react-router-dom";
import MovieCount from "./MovieCount";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vide Video
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/myselection">
                My Selection
              </NavLink>
            </li>
            <li>
              <MovieCount />
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/moviecuriosities">
                Movie Curiosities
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  //This method updates the MovieCount badge dynamically
  // badgeClassUpdate() {
  //   let movieCountClass = "badge m-2 badge-";
  //   movieCountClass += this.state.movieCount === 0 ? "warning" : "primary";
  //   return movieCountClass;
  // }
}

export default NavBar;
