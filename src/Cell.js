import React, { Component } from 'react';

class Cell extends Component {

  state = {
    color: this.props.value
  }

  ChangeColor = () => this.setState({color: '#333'})

  render() {
    return (
      <div className="cell" style={{backgroundColor: `${this.state.color}`}} onClick={this.ChangeColor} />
    );
  };
};

export default Cell