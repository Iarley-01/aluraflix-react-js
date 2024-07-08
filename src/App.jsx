import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import VideosContext from "./contexts/VideosContext";

import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <VideosContext>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo" element={<NovoVideo />} />
      </Routes>
      </VideosContext>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
