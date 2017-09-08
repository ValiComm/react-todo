import React, { Component } from "react";

export default class Form extends Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}
