import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome username="홍길동"></Welcome>
      <Welcome username="고길동"></Welcome>
    </div>
  );
}

export default App;
