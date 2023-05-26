import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import AuthPage from "./pages/AuthPage";
import AuthResultPage from "./pages/AuthResultPage";
import AccountList from "./pages/AccountList";
import BalancePage from "./pages/BalancePage";
import QrCodePage from "./pages/QrCodePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/main" element={<AccountList />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/qrcode" element={<QrCodePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
