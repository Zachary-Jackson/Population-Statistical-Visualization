import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Navbar from "./Navbar";
import ItemForm from "../forms/ItemForm";

// Configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

describe("Navbar", () => {
  const props = {
    items: [{ obj1: "cow" }, { obj2: "pig" }],
    onSelectPopulation: function() {}
  };

  // Snapshots tests

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Navbar {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("has a valid snapshot", () => {
    const component = renderer.create(<Navbar {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Enzyme tests

  it("renders one ItemForm component", () => {
    const element = shallow(<Navbar {...props} />);
    expect(element.find("ItemForm").length).toBe(1);
  });

  it("has one anchor element", () => {
    const element = shallow(<Navbar {...props} />);
    expect(element.find("a").length).toBe(1);
  });
});
