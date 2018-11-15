import React, { Component } from "react";

class MySelection extends Component {
  state = {
    selection: JSON.parse(localStorage.getItem("selected-movies") || "[]")
  };

  handleDelete = id => {
    const selection = this.state.selection.filter(movie => movie.id !== id);

    this.setState({ selection });

    localStorage.setItem("selected-movies", JSON.stringify(selection));
  };

  render() {
    const selection = this.state.selection.filter(({ available }) => available);

    if (selection.length === 0) return <span>No Movies in the Cart</span>;

    const total = selection
      .reduce((sum, { price }) => sum + price, 0)
      .toFixed(2);

    return (
      <React.Fragment>
        <span>You have selected {selection.length} movies:</span>
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
            {this.state.selection.map(selectedMovie => (
              <tr>
                <td>{selectedMovie.id}</td>
                <td>{selectedMovie.title}</td>
                <td>{selectedMovie.price}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(selectedMovie.id)}
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
