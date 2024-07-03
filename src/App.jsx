import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo" element={<NovoVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
