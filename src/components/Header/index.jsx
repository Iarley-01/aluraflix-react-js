import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import Botao from "@/components/Botao";

function Header() {
  return (
    <header className={styles.header}>
      <img src="/imagens/aluraflix-logo.png" alt="Logo do Aluraflix" />
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