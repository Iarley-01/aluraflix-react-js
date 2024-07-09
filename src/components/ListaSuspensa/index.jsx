import styles from "./ListaSuspensa.module.css";


function ListaSuspensa({itens, aoAlterar, novoVideo}) {

  return (
    <div className={styles.campo}>
      <label>Categoria</label>
      <select onChange={(e) => aoAlterar(e.target.value)} value={novoVideo}>
        <option value=""></option>
        {itens.map(item => <option 
        key={item.nome}
        >{item.nome}</option>)}
      </select>
    </div>
  );
}

export default ListaSuspensa;