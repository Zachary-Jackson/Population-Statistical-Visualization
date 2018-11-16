import React from "react";

import ItemForm from "../forms/item_form";
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

  handlePopulationSearch = event => {
    /**
     * Pass the event's value up the chain to the parent component
     *
     * :event: event object that contains an form input named item
     */
    event.preventDefault();
    this.props.onSelectPopulation(event.target.item.value);
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
