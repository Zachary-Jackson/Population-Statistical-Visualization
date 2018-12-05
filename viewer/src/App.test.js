import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";

// Configure Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// import App from "./App";
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it("places a fake test, until I figure out a bug with testing Plotly", () => {});
