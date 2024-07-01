import styles from "./Secao.module.css";

import Card from "@/components/Card";

function Secao({ titulo }) {
  var corDeFundoDoTitulo;
  if (titulo == "front-end") {
    corDeFundoDoTitulo = { backgroundColor: "var(--front-end)"} 
  } else if (titulo == "back-end") {
    corDeFundoDoTitulo = { backgroundColor: "var(--back-end)"} 
  } else {
    corDeFundoDoTitulo = { backgroundColor: "var(--amarelo)"} 
  }
  
  return (
    <section className={styles.secao}>
      <h3 style={corDeFundoDoTitulo} className={styles.secaoTitulo}>
        {titulo.toUpperCase()}
      </h3>
      <div className={styles.videosContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Secao;