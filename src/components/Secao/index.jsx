import styles from "./Secao.module.css";

function Secao({ titulo }) {
  return (<h3>{titulo.toUpperCase()}</h3>);
}

export default Secao;