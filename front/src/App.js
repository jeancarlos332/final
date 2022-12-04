import ApiFake from "./components/ApiFake";
import Main from "./components/Main";
import Games from "./components/Games";
import Employees from "./components/Employees";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/apifake" element={<ApiFake />} />
        <Route path="/games" element={<Games />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
