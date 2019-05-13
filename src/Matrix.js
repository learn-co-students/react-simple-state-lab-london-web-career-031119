import React, { Component } from "react";

import Cell from "./Cell";
import { defaultPattern } from "./data";

export default class Matrix extends Component {
  genRow = (
    vals // vals is an array of 10 strings
  ) =>
    vals.map(val => (
      <div className="cell">
        <Cell value={val} />
      </div>
    ));

  genMatrix = () =>
    this.props.values.map(rowVals => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: defaultPattern
};
