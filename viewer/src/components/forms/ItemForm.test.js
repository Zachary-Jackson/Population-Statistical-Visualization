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

  // Enzyme tests

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
});
