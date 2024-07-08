import styles from "./ListaSuspensa.module.css";


function ListaSuspensa() {

  return (
    <div className={styles.campo}>
      <label>Categoria</label>
      <select>
        <option></option>
        <option>FRONT-END</option>
        <option>BACK-END</option>
        <option>MOBILE</option>
      </select>
    </div>
  );
}

export default ListaSuspensa;