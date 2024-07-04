import styles from "./NovoVideo.module.css";

import Campo from "@/components/Campo";
import ListaSuspensa from "@/components/ListaSuspensa";
import BotaoPadrao from "@/components/BotaoPadrao";

function NovoVideo() {
  return (
    <section className={styles.container}>
      <h2>NOVO VÍDEO</h2>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      <form className={styles.formulario}>
        <h3>Criar Card</h3>
        
        <Campo label="Título" placeholder="Título do vídeo..." tamanho="60" />
        
        <ListaSuspensa />
        
        <Campo label="Imagem" placeholder="URL da imagem do vídeo..." tamanho="60" />
        
        <Campo label="Vídeo" placeholder="Link do vídeo..." tamanho="60" />
        
        <Campo label="Descrição" placeholder="Do que se trata esse vídeo?" tamanho="120" />
        
        <div className={styles.buttons}>
          <BotaoPadrao type="submit">Salvar</BotaoPadrao>
          <BotaoPadrao type="reset">Limpar</BotaoPadrao>
        </div>
      </form>
    </section>
  );
}

export default NovoVideo;