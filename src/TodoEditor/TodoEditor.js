import React, { Component } from "react";
import "./TodoEditor.css";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  hendleChange = (e) => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          className="textArea"
          value={this.state.message}
          onChange={this.hendleChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Save
        </button>
      </form>
    );
  }
}

export default TodoEditor;
