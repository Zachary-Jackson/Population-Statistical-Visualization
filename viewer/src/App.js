import React, { Component } from "react";

import API from "./components/DataViewer.js";
import Navbar from "./components/navbar/Navbar.js";

// Default API path information
const URL_BASE = "http://127.0.0.1:8000/api/v1";
const URL_SEARCH = "/location/";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /** result is the population array send back from the Database's API */
      result: [],
      /** selected_population is the population the user is searching with */
      selected_population: "",
      /** selected_id is the population id the user is searching with */
      selected_id: 0
    };
    this.setCountriesAndSelected = this.setCountriesAndSelected.bind(this);
  }

  handlePopulationChange = (population, id) => {
    /**
     * Sets the data from population and index to
     * this.state.selected_population and selected_id
     *
     * :population: A string of a population/countries name
     */
    this.setState({ selected_population: population, selected_id: id });
  };

  setCountriesAndSelected(result) {
    /**
     * Sets the data from the result parameter and sets the various states
     * from it
     *
     * Defaults the selected_population and selected_id to the first object
     *
     * :result: Raw API data
     */
    let selected_population = result[0]["name"];
    let selected_id = 0;

    this.setState({
      result: result,
      selected_population: selected_population,
      selected_id: selected_id
    });
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
      .then(result => this.setCountriesAndSelected(result))
      .catch(error => error);
  }

  render() {
    let populations = this.state.result;
    return (
      <div className="App">
        <Navbar
          items={populations}
          onSelectPopulation={this.handlePopulationChange}
        />
        <API
          items={populations}
          selected={this.state.selected_population}
          selected_id={this.state.selected_id}
        />
      </div>
    );
  }
}

export default App;
