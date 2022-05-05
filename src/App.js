import "./App.css";
import React, { Component } from "react";
import shortid from "shortid";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import Container from "./components/Container";
import Form from "./components/Form";
import TodoEditor from "./TodoEditor";
import Filter from "./components/Filter";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
const initialTodo = [
  { id: "id-1", text: "Todo 1", completed: false },
  { id: "id-2", text: "Todo 2", completed: false },
  { id: "id-3", text: "Todo 3", completed: false },
  { id: "id-4", text: "Todo 4", completed: false },
];

class App extends Component {
  state = {
    todos: initialTodo,
    filter: "",
  };

  addTodo = (text) => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text, //like text: text;
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  // formSubmitHandler = (data) => {
  //   console.log(data);
  // };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    console.log("~ normalazedFilter", normalazedFilter);
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalazedFilter)
    );
  };

  calculateCompleatedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodos = this.calculateCompleatedTodos();
    const vizibleTodos = this.getVisibleTodos();

    return (
      <Container>
        {/* <Form onSubmit={this.formSubmitHandler} />
        <Counter initialValue={5} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість: {todos.length}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>

        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={vizibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

      </Container>
    );
  }
}

export default App;
