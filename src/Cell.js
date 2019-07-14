import React, { Component } from "react";

export default class Cell extends Component {
  state = { color: this.props.value };

  constructor(props) {
    super(props);
    this.state.color = this.props.value;
  }

  handleClickEvent = () => {
    this.setState({ color: "#333" });
  };

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClickEvent}
        className="cell"
      />
    );
  }
}
