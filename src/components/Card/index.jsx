import styles from "./Card.module.css";

import { useVideosContext } from "@/contexts/VideosContext";

function Card({ cor, card }) {
  const { setCardSelecionado } = useVideosContext();
  
  const aoEditarCard = () => {
    setCardSelecionado(card);
  }
  
  var corDaBorda = { borderColor: `${cor}`};
  return (
    <div className={styles.card} style={corDaBorda}>
      <a href={card.url} className={styles.cardImage} style={corDaBorda}>
        <img src={card.img} alt={card.titulo} />
      </a>
      <div className={styles.containerBotoes}>
        <button><img src="/imagens/remove.png" /> DELETAR</button>
        <button onClick={aoEditarCard}><img src="/imagens/edit.png" /> EDITAR</button>
      </div>
    </div>
  );
}

export default Card;