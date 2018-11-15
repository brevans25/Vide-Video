import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: ""
  };

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          onChange={this.onSearchChange}
          name="search"
          ref={input => (this.year = input)}
          placeholder="Search..."
        />
        <button type="submit" id="submit" className="search-button">
          <i className="material-icons icn-search">Search</i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
