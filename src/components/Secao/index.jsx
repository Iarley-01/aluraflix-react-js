import { useEffect } from "react";

import styles from "./Secao.module.css";

import Card from "@/components/Card";

function Secao({ titulo, cor }) {
  /*useEffect(() => {
    fetch("https://my-json-server.typicode.com/Iarley-01/api-aluraflix/categorias")
      .then(response => response.json())
      .then(console.log(response))
  })*/
  
  var corDeFundoDoTitulo = { backgroundColor: `${cor}`};
  var corDoCard = cor;
  /*if (titulo == "front-end") {
    corDeFundoDoTitulo = { backgroundColor: "var(--front-end)"} 
  } else if (titulo == "back-end") {
    corDeFundoDoTitulo = { backgroundColor: "var(--back-end)"} 
  } else {
    corDeFundoDoTitulo = { backgroundColor: "var(--amarelo)"} 
  }*/
  
  return (
    <section className={styles.secao}>
      <h3 style={corDeFundoDoTitulo} className={styles.secaoTitulo}>
        {titulo.toUpperCase()}
      </h3>
      <div className={styles.videosContainer}>
        <Card cor={corDoCard} />
      </div>
    </section>
  );
}

export default Secao;