import "./App.css";
import Counter from "./components/Counter/Counter";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <div className="App">
      <Counter initialValue={5} />
      <Dropdown />
    </div>
  );
}

export default App;
