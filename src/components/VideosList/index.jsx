import { useEffect, useState } from "react";

import styles from "./VideosList.module.css";

import Secao from "@/components/Secao";

import {useVideosContext} from "@/contexts/VideosContext";
import useDeleteVideoCard from "@/hooks/useDeleteVideo";

function VideosList() {
  const { cards, setCards, secoes, setSecoes } = useVideosContext();
  const aoDeletar = useDeleteVideoCard(setCards);
  
  return (
    <section className={styles.containerSecoes}>
      {secoes.map(secao => 
      <Secao 
       titulo={secao.nome} 
       cor={secao.cor} 
       key={secao.titulo}
       cards={cards.filter(card => card.categoria == secao.id)}
       aoDeletarCard={aoDeletar}
      />)}
    </section>
  );
}

export default VideosList;