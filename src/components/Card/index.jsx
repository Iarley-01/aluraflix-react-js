import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <a href="#" className={styles.cardImage}>
        <div className={styles.shadow}></div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPvdoesQ0ZuZyIgRGISuSHi0lM4wPkoyReiPLD9dH-34VIge1sDQY0Q&s=10" alt="nome do video" />
      </a>
      <div className={styles.containerBotoes}>
        <button><img src="/imagens/edit.png" /> DELETAR</button>
        <button><img src="/imagens/remove.png" /> EDITAR</button>
      </div>
    </div>
  );
}

export default Card;