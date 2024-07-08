import styles from "./ListaSuspensa.module.css";


function ListaSuspensa({itens}) {

  return (
    <div className={styles.campo}>
      <label>Categoria</label>
      <select>
        <option></option>
        {itens.map(item => <option>{item}</option>)}
      </select>
    </div>
  );
}

export default ListaSuspensa;