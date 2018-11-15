import React, { Component } from "react";

import Navbar from "./components/page_layout_components/navbar.js";
import API from "./components/temp_list_all.js";

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
    this.setState({ result });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <API />
      </div>
    );
  }
}

export default App;
