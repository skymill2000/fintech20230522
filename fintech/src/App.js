import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import StateComponent from "./components/StateComponent";
import InputComponents from "./components/InputComponents";
import ListComponents from "./components/ListComponents";

function App() {
  return (
    <div className="App">
      <InputComponents></InputComponents>
      <ListComponents></ListComponents>
    </div>
  );
}

export default App;
