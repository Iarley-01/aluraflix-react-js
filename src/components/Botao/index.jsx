import { NavLink } from "react-router-dom";
import styles from "./Botao.module.css";


function Botao({children}) {
  return (
    <NavLink
      className={({ isActive }) => `${styles.link} ${isActive ? styles.linkAtivo : ""}`}
    >
      {children}
    </NavLink>
  );
}

export default Botao;