import React, { Component } from "react";

// Default API path information
const URL_BASE = "http://127.0.0.1:8000/api/v1";
const URL_SEARCH = "/location/";

class API extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null
    };
    this.setCountries = this.setCountries.bind(this);
  }

  setCountries(result) {
    /**
     * Adds one to each item in this.state.formKeys to reset the forms
     * in the render method
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
    // Because of the asynchronous nature of API calls, we need to check if we
    // have received any data before using it
    let listItems = null;
    if (this.state.result !== null) {
      listItems = this.state.result.map((item, index) => {
        if (item) {
          return [<li key={index}>{item["name"]}</li>];
        }
        // If no data, return an empty list
        return [];
      });
    } else {
      listItems = [];
    }

    return (
      <div className={"container pt-4"}>
        <div className={"row"}>
          <ol className={"mx-auto"}>{listItems}</ol>
        </div>
      </div>
    );
  }
}

export default API;
