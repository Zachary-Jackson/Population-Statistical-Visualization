import React from "react";

/**
 * Component that renders a main top navbar
 */
export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand text-white">
            Population Statistical Visualization
          </a>
        </nav>
      </div>
    );
  }
}
