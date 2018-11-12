import React, { Component } from "react";

class MySelection extends Component {
  state = {
    movieCount: 0
  };
  render() {
    return (
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
    );
  }
}

export default MySelection;
