import { useEffect, useState } from "react";

import styles from "./Secao.module.css";

import Card from "@/components/Card";

function Secao({ titulo, cor, cards, aoDeletarCard }) {
  
  
  var corDeFundoDoTitulo = { backgroundColor: `${cor}`};
  var corDoCard = cor;

  return (
    <section className={styles.secao}>
      <h3 style={corDeFundoDoTitulo} className={styles.secaoTitulo}>
        {titulo.toUpperCase()}
      </h3>
      <div className={styles.videosContainer}>
        {cards.map(card => <Card key={card.id}  cor={corDoCard} card={card} onDelete={aoDeletarCard} />)}
      </div>
    </section>
  );
}

export default Secao;