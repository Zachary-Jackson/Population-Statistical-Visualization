import React, { Component } from "react";
import "./App.css";

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

  componentDidMount() {
    const url = `${URL_BASE}${URL_SEARCH}`;
    fetch(`${url}`)
      .then(response => response.json())
      .then(result => this.setCountries(result))
      .catch(error => error);
  }

  render() {
    // Because of the asynchronous nature of API calls, we need to check if we
    // have received any data before using it
    let listItems = null;
    if (this.state.result !== null) {
      listItems = this.state.result.map(item => {
        if (item) {
          return [<li>{item["name"]}</li>];
        }
      });
    } else {
      listItems = [];
    }
    return (
      <div className="App">
        <h1>Population Visualization</h1>
        <ol>{listItems}</ol>
      </div>
    );
  }
}

export default App;
