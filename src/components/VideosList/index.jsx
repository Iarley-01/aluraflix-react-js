import { useEffect, useState } from "react";

import styles from "./VideosList.module.css";

import Secao from "@/components/Secao";

import {useVideosContext} from "@/contexts/VideosContext";

function VideosList() {
  const { cards, setCards, secoes, setSecoes } = useVideosContext();
  
  return (
    <section className={styles.containerSecoes}>
      {secoes.map(secao => 
      <Secao 
       titulo={secao.nome} 
       cor={secao.cor} 
       key={secao.titulo}
       cards={cards.filter(card => card.categoria == secao.id)}
      />)}
    </section>
  );
}

export default VideosList;