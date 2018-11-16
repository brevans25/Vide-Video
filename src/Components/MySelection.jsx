import React, { Component } from "react";

class MySelection extends Component {
  state = {
    selection: JSON.parse(localStorage.getItem("selected-movies") || "[]")
  };

  //This function controls the DELETE button
  handleDelete = index => {
    const selection = [
      ...this.state.selection.slice(0, index),
      ...this.state.selection.slice(index + 1, this.state.selection.length)
    ];

    this.setState({ selection });

    localStorage.setItem("selected-movies", JSON.stringify(selection));
  };

  render() {
    if (this.state.selection.length === 0)
      return <h1>No Movies in the Cart</h1>;

    const total = this.state.selection
      .reduce((sum, { price }) => sum + price, 0)
      .toFixed(2);

    return (
      <React.Fragment>
        <span>You have selected {this.state.selection.length} movies:</span>
        <table className="table">
          <thead>
            <tr>
              <th>#id</th>
              <th>Title</th>
              <th>Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.selection.map((selectedMovie, index) => (
              <tr key={selectedMovie.id}>
                <td>{selectedMovie.id}</td>
                <td>{selectedMovie.title}</td>
                <td>{selectedMovie.price}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(index)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>Total: {total}</td>
              <td>&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    );
  }
}

export default MySelection;
