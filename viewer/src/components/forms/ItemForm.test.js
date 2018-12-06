import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ItemForm from "./ItemForm.js";

// Configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("ItemForm", () => {
  const props = {
    items: ["cow", "pig"],
    handleSubmit: function() {}
  };

  // Snapshot Tests

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ItemForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<ItemForm {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Enzyme render tests

  it("has two buttons", () => {
    const element = shallow(<ItemForm {...props} />);
    expect(element.find("button").length).toBe(2);
  });

  it("has an input field", () => {
    const element = shallow(<ItemForm {...props} />);
    expect(element.find("input").length).toBe(1);
  });

  it("renders one form", () => {
    const element = shallow(<ItemForm {...props} />);
    expect(element.find("form").length).toBe(1);
  });

  // Enzyme state tests

  it("allows the user to enter a valid item, case-insensitive", () => {
    const element = shallow(<ItemForm {...props} />);

    // Change the form's input value
    element.find("input").simulate("change", { target: { value: "CoW" } });

    // The item should now be valid and the value CoW
    expect(element.instance().state["itemValid"]).toBe(true);
    expect(element.instance().state["value"]).toBe("CoW");
  });

  it("prevents user from submitting invalid item", () => {
    const element = shallow(<ItemForm {...props} />);

    // Change the form's input value
    element.find("input").simulate("change", { target: { value: "onion" } });

    // The item is not valid
    expect(element.instance().state["itemValid"]).toBe(undefined);
  });
});
