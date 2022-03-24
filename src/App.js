import "./App.css";
import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import Container from "./components/Container";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Todo 1", completed: false },
      { id: "id-2", text: "Todo 2", completed: true },
      { id: "id-3", text: "Todo 3", completed: false },
      { id: "id-4", text: "Todo 4", completed: false },
    ],
    name: "",
    tag: "",
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  handChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { todos } = this.state;
    const { name, tag } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <Container>
        <form>
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
        </form>
        <Counter initialValue={5} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <div>
          <p>Загальна кількість: {todos.length}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <div className="App"></div>
      </Container>
    );
  }
}

export default App;
