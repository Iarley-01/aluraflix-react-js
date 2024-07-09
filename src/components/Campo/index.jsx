import styles from "./Campo.module.css";

function Campo({ name, label, placeholder, tamanho, novoVideo, aoAlterar }) {
  const placeholderModificada = `${placeholder}`;
  const alturaDoCampo = { height: `${tamanho}px`};
  return (
    <div className={styles.campoTexto}>
      <label htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type="text" required placeholder={placeholderModificada} style={alturaDoCampo} value={novoVideo} onChange={aoAlterar} />
    </div>
  );
}

export default Campo;