import React from "react";

class Cell extends React.Component {
  state = {
    color: this.props.value
  };
  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onClick={this.changeColor}
      />
    );
  }

  changeColor = () => {
    const newColor = this.state.color = "#333"

    this.setState({
      color: newColor
    });
  };
}

export default Cell;
