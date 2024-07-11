import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import VideosContext from "./contexts/VideosContext";

import { useVideosContext } from "./contexts/VideosContext";

import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import NaoEncontrada from "./pages/NaoEncontrada";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalEditar from "./components/ModalEditar";

function App() {

  return (
    <BrowserRouter>
      
      <Header />
      <VideosContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<NovoVideo />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
        <ModalEditar />
      </VideosContext>
      
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
