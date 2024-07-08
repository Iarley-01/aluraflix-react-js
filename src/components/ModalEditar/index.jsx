import styles from "./ModalEditar.module.css";
import { useVideosContext } from "@/contexts/VideosContext";

function ModalEditar() {
  const { cardSelecionado, setCardSelecionado } = useVideosContext();
  
  return (
    <>
    {cardSelecionado && <div className={styles.overlay}>
      <dialog className={styles.formDialog} open={!!cardSelecionado} onClose={() => setCardSelecionado(null)}>
        <h1>Modal</h1>
        <form method="dialog">
          <button formMethod="dialog">
            <img src="/imagens/close.png" alt="Ícone Fechar" />
          </button>
        </form>
      </dialog>
    </div>}
    </>
  );
}

export default ModalEditar;