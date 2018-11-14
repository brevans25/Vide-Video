import React, { Component } from "react";

class MySelection extends Component {
  state = {
    selection: [
      /*pass the movies selected in the catalog*/
    ]
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter();
  };

  render() {
    const { length: selectedMoviesCount } = this.state.selection;

    if (selectedMoviesCount === 0) return <span>No Movies in the Cart</span>;

    return (
      <React.Fragment>
        <span>You have selected {selectedMoviesCount} movies:</span>
        <table className="table">
          <thead>
            <tr>
              <th>#id</th>
              <th>Title</th>
              <th>Available</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* {this.state.selection.map(selectedMovie =>.... */}
              <td>Quero</td>
              <td>Dormir</td>
              <td>Pra</td>
              <td>Caralho</td>
              <td>
                <button
                  onClick={() => this.handleDelete()}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MySelection;
