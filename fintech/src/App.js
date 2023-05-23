import logo from "./logo.svg";
import "./App.css";

const Welcome = ({ username }) => {
  console.log(username);
  return <p>안녕하세요! {username}님 반값습니다.</p>;
};

function App() {
  return (
    <div className="App">
      <Welcome username="홍길동"></Welcome>
      <Welcome username="고길동"></Welcome>
    </div>
  );
}

export default App;
