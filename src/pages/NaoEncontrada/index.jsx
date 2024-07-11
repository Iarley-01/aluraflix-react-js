import styles from "./NaoEncontrada.module.css";

function NaoEncontrada() {
  return (
    <div className={styles.textBox}>
      <h2>Aviso</h2>
      <p>O conteúdo que voce buscou não existe</p>
    </div>
  );
}

export default NaoEncontrada;