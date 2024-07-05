import { useEffect, useState } from "react";

import styles from "./VideosList.module.css";

import Secao from "@/components/Secao";

function VideosList() {
  
  
  const [secoes, setSecoes] = useState([]);
  
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Iarley-01/api-aluraflix/categorias")
      .then(response => response.json())
      .then(dados => setSecoes(dados))
  })
  
  return (
    <section classList={styles.containerSecoes}>
      {secoes.map(secao => <Secao titulo={secao.nome} cor={secao.cor} key={secao.titulo} />)}
    </section>
  );
}

export default VideosList;