import styles from "./Campo.module.css";

function Campo({ label, placeholder }) {
  const placeholderModificada = `${placeholder}`; 
  return (
    <div className={styles.campoTexto}>
      <label>
        {label}
      </label>
      <input type="text" required placeholder={placeholderModificada} />
    </div>
  );
}

export default Campo;