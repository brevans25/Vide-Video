import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import SearchBar from "./components/searchBar";

//App Components
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Catalog from "./components/Catalog";
import Trending from "./components/Trending";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/trending" component={Trending} />
    </div>
  </BrowserRouter>
);

export default App;
