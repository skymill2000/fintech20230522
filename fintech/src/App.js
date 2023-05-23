import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import StateComponent from "./components/StateComponent";

function App() {
  return (
    <div className="App">
      <Welcome username="홍길동" age={30}></Welcome>
      <Welcome username="고길동" age={30}></Welcome>
      <StateComponent></StateComponent>
      {/* Work01 : 사용자의 나이를 Props 를 통해 전달하여 출력
          ex ) 안녕하세요 '고길동'님 나이는 '30'세 입니다.
      */}
    </div>
  );
}

export default App;
