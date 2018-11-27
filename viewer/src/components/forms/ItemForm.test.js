import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import ItemForm from "./ItemForm.js";

describe("ItemForm", () => {
  const props = {
    items: ["cow", "pig"],
    handleSubmit: function() {}
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<ItemForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<ItemForm {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
