import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    licence: false,
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

  handleLicenceChange = (event) => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
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
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Agree
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
