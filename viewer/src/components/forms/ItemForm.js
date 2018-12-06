import React from "react";
import PropTypes from "prop-types";

/**
 * This is a searching form component that ensures the user can only enter and
 * submit the items sent into the items PropType
 *
 * The searching is case-insensitive, but passes name up case sensitive
 * The name's ID is also passed up
 *
 * Their is also a random search button to return a random object
 */
export default class ItemForm extends React.Component {
  static propTypes = {
    /** Items that the user can choose from*/
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** A function that will get called with a valid form */
    handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      /**
       * Is the item in the correct format and can be submitted
       * Also used for button disable toggle
       * */
      itemValid: false,
      /** The input form's value */
      value: ""
    };
  }

  clearValue() {
    /**
     * Resets state.value to empty ""
     *
     */
    this.setState({
      value: ""
    });
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
    const valid = itemInArrayCaseInsensitive(
      event.target.value,
      this.props.items
    );
    this.setState({
      itemValid: valid
    });
  };

  handleSubmit = event => {
    /**
     * Passes the form's value up the chain, but ensures that the value is
     * case sensitive
     *
     * :event: takes a standard event value
     */
    event.preventDefault();
    let item = event.target.item.value;

    // Lowercase the items array, so we can reverse engineer the case
    // sensitive pk
    let lower_cased_array = this.props.items.map(item => {
      return item.toLowerCase();
    });
    let item_index = lower_cased_array.findIndex(k => k === item.toLowerCase());

    // Clear the value of state.value
    this.clearValue();

    this.props.handleSubmit(this.props.items[item_index], item_index);
  };

  handleRandom = event => {
    /**
     * Gets a random item and passes it back up the chain
     *
     * :event: takes a standard event value
     */

    event.preventDefault();
    let length = this.props.items.length;

    let item_index = Math.floor(Math.random() * (length + 1));

    // Clear the value of state.value
    this.clearValue();

    this.props.handleSubmit(this.props.items[item_index], item_index);
  };

  render() {
    /* Renders a text form */

    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
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
          className="btn btn-success my-2 my-sm-0 mr-2"
          type="submit"
          disabled={!this.state.itemValid}
        >
          Search
        </button>
        <button
          className="btn btn-primary my-2 my-sm-0"
          type="submit"
          onClick={this.handleRandom}
        >
          Random
        </button>
      </form>
    );
  }
}

function itemInArrayCaseInsensitive(item, itemArray) {
  /**
   * Checks to see if an item is empty or in itemList case-insensitive
   *
   * :param item: String value of an item
   * :return : boolean True if in itemArray
   */
  let lower_cased_array = itemArray.map(item => {
    return item.toLowerCase();
  });
  if (lower_cased_array.includes(item.toLowerCase())) {
    return true;
  }
}
