import styles from "./ModalEditar.module.css";
import { useVideosContext } from "@/contexts/VideosContext";

import FormularioEditar from "@/components/FormularioEditar";

function ModalEditar() {
  const { cardSelecionado, setCardSelecionado } = useVideosContext();
  
  return (
    <>
    {cardSelecionado && <div className={styles.overlay}>
      <dialog className={styles.formDialog} open={!!cardSelecionado} onClose={() => setCardSelecionado(null)}>
        <h1>Editar Vídeo</h1>
        <form method="dialog">
          <button className={styles.iconeFechar} formMethod="dialog">
            <img src="/imagens/close.png" alt="Ícone Fechar" />
          </button>
        </form>
        <FormularioEditar 
          card={cardSelecionado}
          onClose={setCardSelecionado}
        />
      </dialog>
    </div>}
    </>
  );
}

export default ModalEditar;