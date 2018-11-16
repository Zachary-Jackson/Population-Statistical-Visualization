import React from "react";

import ItemForm from "../forms/item_form";
import PropTypes from "prop-types";

/**
 * Component that renders a main top navbar
 */
export default class Navbar extends React.Component {
  static propTypes = {
    /** An array of items with a  */
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  handlePopulationSearch = event => {
    /**
     * Temporary console.log the event's item value
     *
     * :event: event object
     */
    event.preventDefault();
    console.log(event.target.item.value);
  };

  render() {
    // Get the names of each item in props.items to send to ItemForm
    let item_names = this.props.items.map(item => {
      return item["name"];
    });

    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand text-white">
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
