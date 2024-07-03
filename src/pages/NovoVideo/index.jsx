import styles from "./NovoVideo.module.css";

import Campo from "@/components/Campo";
import ListaSuspensa from "@/components/ListaSuspensa";

function NovoVideo() {
  return (
    <section className={styles.container}>
      <h2>NOVO VÍDEO</h2>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      <form className={styles.formulario}>
        <h3>Criar Card</h3>
        
        <Campo label="Título" placeholder="Título do vídeo..." tamanho="60" />
        
        <ListaSuspensa />
      </form>
    </section>
  );
}

export default NovoVideo;