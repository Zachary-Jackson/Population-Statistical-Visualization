import React, { Component } from "react";
import PropTypes from "prop-types";

class API extends Component {
  static propTypes = {
    /** An array of population objects */
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    selected: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      result: null
    };
  }

  render() {
    // If props.items is null, display the default search option
    if (this.props.selected === "") {
      return (
        <div className={"container pt-4"}>
          <div className={"column"}>
            <div className={"row"}>
              <p className={"mx-auto"}>No Searched Population</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={"container pt-4"}>
          <div className={"column"}>
            <div className={"row"}>
              <p className={"mx-auto"}>
                You are searching by {this.props.selected}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default API;
