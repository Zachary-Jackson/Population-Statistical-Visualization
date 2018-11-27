import React from "react";

import ItemForm from "../forms/ItemForm.js";
import PropTypes from "prop-types";

/**
 * Component that renders a main top navbar
 */
export default class Navbar extends React.Component {
  static propTypes = {
    /** An array of population objects */
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** Function that allows an object to be passed to the parent component */
    onSelectPopulation: PropTypes.func.isRequired
  };

  handlePopulationSearch = (population, index) => {
    /**
     * Pass the event's value up the chain to the parent component
     *
     * :population: Population name
     * :index: The index of the population
     */
    this.props.onSelectPopulation(population, index);
  };

  render() {
    // Get the names of each item in props.items to send to ItemForm
    let item_names = this.props.items.map(item => {
      return item["name"];
    });

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand text-white" href={""}>
            Population Statistical Visualization
          </a>

          <ItemForm
            handleSubmit={this.handlePopulationSearch}
            items={item_names}
          />
        </nav>
      </div>
    );
  }
}
