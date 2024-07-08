import styles from "./Campo.module.css";

function Campo({ label, placeholder, tamanho, valor }) {
  const placeholderModificada = `${placeholder}`;
  const alturaDoCampo = { height: `${tamanho}px`};
  return (
    <div className={styles.campoTexto}>
      <label>
        {label}
      </label>
      <input type="text" required placeholder={placeholderModificada} style={alturaDoCampo} />
    </div>
  );
}

export default Campo;