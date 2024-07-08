import { createContext, useContext, useState, useEffect } from "react";

export const VideosContext = createContext();

export default function VideosProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [secoes, setSecoes] = useState([]);
  const [cardSelecionado, setCardSelecionado] = useState(null);
  
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Iarley-01/api-aluraflix/videos")
      .then(response => response.json())
      .then(dados => setCards(dados))
  }, [])
  
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Iarley-01/api-aluraflix/categorias")
      .then(response => response.json())
      .then(dados => setSecoes(dados))
  }, [])
  
  
  return (
    <VideosContext.Provider value={{
      cards,
      setCards,
      secoes,
      setSecoes,
      cardSelecionado,
      setCardSelecionado
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export function useVideosContext(){
  const { secoes, setSecoes, cards, setCards, cardSelecionado, setCardSelecionado } = useContext(VideosContext);

  return {
    secoes,
    setSecoes,
    cards,
    setCards,
    cardSelecionado,
    setCardSelecionado
  }
}