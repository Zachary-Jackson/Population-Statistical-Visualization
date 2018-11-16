import React, { Component } from "react";

import API from "./components/temp_list_all.js";
import Navbar from "./components/navbar/navbar.js";

// Default API path information
const URL_BASE = "http://127.0.0.1:8000/api/v1";
const URL_SEARCH = "/location/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    };
    this.setCountries = this.setCountries.bind(this);
  }

  setCountries(result) {
    /**
     * Sets the data from the result parameter to this.state.result
     *
     * :result: Takes API data of some kind and sets the State of result to it
     */
    this.setState({ result });
  }

  componentDidMount() {
    /**
     * Creates and calls an API based on the URL constants
     * Then it handles the data, passing it to setCountries
     *
     * :event: takes a standard event value
     */
    const url = `${URL_BASE}${URL_SEARCH}`;
    fetch(`${url}`)
      .then(response => response.json())
      .then(result => this.setCountries(result))
      .catch(error => error);
  }

  render() {
    // Check if this.state.results is null, to keep downstream components
    // content
    var populations = [];
    if (this.state.result !== null) {
      populations = this.state.result;
    }
    return (
      <div className="App">
        <Navbar items={populations} />
        <API />
      </div>
    );
  }
}

export default App;
