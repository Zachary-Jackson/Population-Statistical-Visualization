import React from "react";
import Plot from "react-plotly.js";
import PropTypes from "prop-types";

export default class Graph extends React.Component {
  static propTypes = {
    /** The graph's title */
    title: PropTypes.string,
    /** An array items to populate the x axis */
    x_axis: PropTypes.arrayOf(PropTypes.number).isRequired,
    /** An array items to populate the y axis */
    y_axis: PropTypes.arrayOf(PropTypes.number).isRequired
  };

  render() {
    let line = {
      type: "scatter",
      x: this.props.x_axis,
      y: this.props.y_axis,
      mode: "lines+markers",
      line: {
        color: "rgb(219, 64, 82)",
        width: 3
      }
    };
    let layout = {
      width: 640,
      height: 480,
      title: this.props.title,
      xaxis: {
        title: "Years",
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        title: "Population in Millions",
        showline: false
      }
    };

    return (
      <div>
        <Plot data={[line]} layout={layout} />
      </div>
    );
  }
}
