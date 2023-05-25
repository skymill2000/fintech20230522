import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
