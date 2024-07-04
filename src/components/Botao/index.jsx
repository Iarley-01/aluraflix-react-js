import { NavLink } from "react-router-dom";
import styles from "./Botao.module.css";

function Botao({children, to}) {
  return (
    <NavLink
      className={({ isActive }) => `${styles.linkBotao} ${ isActive ? styles.linkAtivo : ""}`}
      to={to} end
    >
      {children}
    </NavLink>
  );
}

export default Botao;