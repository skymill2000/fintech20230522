import logo from "./logo.svg";
import "./App.css";

const Welcome = () => {
  return <p>처음으로 만든 컴포넌트 입니다.</p>;
};

function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
