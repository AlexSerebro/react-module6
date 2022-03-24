import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tag: "",
  };

  handChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    const { name, tag } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handChange}
          />
        </label>
        <label>
          Tag
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={this.handChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
