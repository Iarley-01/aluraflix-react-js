import styles from "./Secao.module.css";

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
        
      </div>
    </section>
  );
}

export default Secao;