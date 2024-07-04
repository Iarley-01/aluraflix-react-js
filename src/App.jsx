import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo" element={<NovoVideo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
