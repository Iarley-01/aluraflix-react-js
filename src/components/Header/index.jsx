import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import logo from "./aluraflix-logo.png";

import Botao from "@/components/Botao";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Aluraflix" />
      <nav>
        <Botao to="/">
          HOME
        </Botao>
        <Botao to="/novo">
          NOVO VÍDEO
        </Botao>
      </nav>
    </header>
  );
}

export default Header;