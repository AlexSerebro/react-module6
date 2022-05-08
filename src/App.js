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
import { Modal } from "./components/Modal";
import { Clock } from './components/Clock'
import Tabs from "./components/Tabs";
import { IconButton } from "./components/IconButton";
import tabs from './tabs.json'
import { ReactComponent as AddIcon } from "./icons/add.svg";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
// const initialTodo = [
//   { id: "id-1", text: "Todo 1", completed: false },
//   { id: "id-2", text: "Todo 2", completed: false },
//   { id: "id-3", text: "Todo 3", completed: false },
//   { id: "id-4", text: "Todo 4", completed: false },
// ];

class App extends Component {
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

    componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const parseTodos = JSON.parse(todos);

    if (parseTodos) {
      this.setState({ todos: parseTodos });
    }
    

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }

    if (this.state.todos.length > prevState.todos.length && prevState.todos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = (text) => {
    // console.log(text);
    const todo = {
      id: shortid.generate(),
      text, //like text: text;
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
    // this.toggleModal();
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
    // console.log("~ normalazedFilter", normalazedFilter);
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalazedFilter)
    );
  };

  calculateCompleatedTodos = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

    toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  render() {
    console.log('App render');
    const { todos, filter, showModal } = this.state;
    const completedTodos = this.calculateCompleatedTodos();
    const vizibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Clock />
        <Tabs items={ tabs}/>
        <IconButton onClick={this.toggleModal} aria-label='Add Todo'>
          <AddIcon width='40' height='40' fill='#000'/>
        </IconButton>
        {showModal && <Modal onClose={this.toggleModal}>
          <TodoEditor onSubmit={this.addTodo} />
          
        </Modal>}
        
        {/* <Form onSubmit={this.formSubmitHandler} />
        <Counter initialValue={5} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Загальна кількість: {todos.length}</p>
          <p>Кількість виконаних: {completedTodos}</p>
        </div>
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
