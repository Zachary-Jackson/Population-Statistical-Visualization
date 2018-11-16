import React from "react";
import PropTypes from "prop-types";

/**
 * This is a searching form component that ensures the user can only enter and
 * submit the items sent into the items PropType
 */
export default class ItemForm extends React.Component {
  static propTypes = {
    /** Items that the user can choose from */
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** A function that will get called with a valid form */
    handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      /** Changes whether or not the input button is valid */
      valid: true,
      /** The input form's value */
      value: ""
    };
  }

  itemValid(item) {
    /**
     * Checks to see if an item is empty or in self.state.items
     *
     * :param item: String value of an item
     * :return : Boolien True if in self.state.items
     */
    if (this.props.items.includes(item)) {
      return true;
    }
  }

  handleChange = event => {
    /**
     * Sets the state of newItemInput/newItemValid
     *
     * :event: takes a standard event value
     */
    this.setState({
      value: event.target.value
    });
    const valid = this.itemValid(event.target.value);
    this.setState({
      itemValid: valid
    });
  };

  render() {
    /* Renders a text form */

    return (
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={this.props.handleSubmit}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          name={"item"}
          placeholder="Search populations"
          aria-label="Search"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          disabled={!this.state.itemValid}
        >
          Search
        </button>
      </form>
    );
  }
}
