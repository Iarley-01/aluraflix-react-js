import styles from "./Card.module.css";

function Card({ cor, card }) {
  var corDaBorda = { borderColor: `${cor}`};
  return (
    <div className={styles.card} style={corDaBorda}>
      <a href={card.url} className={styles.cardImage} style={corDaBorda}>
        <img src={card.img} alt={card.titulo} />
      </a>
      <div className={styles.containerBotoes}>
        <button><img src="/imagens/remove.png" /> DELETAR</button>
        <button onClick={() => {
          console.log(card)
        }}><img src="/imagens/edit.png" /> EDITAR</button>
      </div>
    </div>
  );
}

export default Card;