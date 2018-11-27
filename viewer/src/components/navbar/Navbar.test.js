import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Navbar from "./Navbar";

describe("Navbar", () => {
  const props = {
    items: [{ obj1: "cow" }, { obj2: "pig" }],
    onSelectPopulation: function() {}
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<Navbar {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<Navbar {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
