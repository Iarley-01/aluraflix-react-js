import styles from "./NovoVideo.module.css";

function NovoVideo() {
  return (
    <section className={styles.container}>
      <h2>NOVO VÍDEO</h2>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      <form>
        <h3>Criar Card</h3>
      </form>
    </section>
  );
}

export default NovoVideo;