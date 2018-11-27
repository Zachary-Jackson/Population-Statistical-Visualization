import React, { Component } from "react";
import PropTypes from "prop-types";

import Graph from "./graphs/PopulationGraph.js";

class API extends Component {
  static propTypes = {
    /** An array of population objects */
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    /** The name of the selected object */
    selected: PropTypes.string.isRequired,
    /** The id of the selected object */
    selected_id: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    // If props.items is null, inform the user
    let searching_by = "No Searched Population";
    if (this.props.selected !== "") {
      searching_by = "You are searching by " + this.props.selected;
    }

    // If applicable get the y_axis data points
    let y_axis = [];

    if (this.props.selected !== "") {
      let item = this.props.items[this.props.selected_id];
      for (const key of Object.keys(item)) {
        if (key !== "id" && key !== "name") {
          y_axis.push(item[key]);
        }
      }
    }

    let x_axis = [];
    // Create an array of integers from the years 1980-2010
    for (let i = 1980; i < 2010; i++) {
      x_axis.push(i);
    }

    return (
      <div className={"container pt-4"}>
        <div className={"column"}>
          <div className={"row"}>
            <p className={"mx-auto"}>{searching_by}</p>
          </div>
        </div>
        <div className={"column"}>
          <div className={"row"}>
            <p className={"mx-auto"}>
              <Graph
                title={this.props.selected}
                x_axis={x_axis}
                y_axis={y_axis} // Any Null values get handled by React-Plotly
              />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default API;
