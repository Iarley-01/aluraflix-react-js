import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

import Botao from "@/components/Botao";

function Footer() {
  var rota = "/";
  var icone = "/imagens/home-ativo.png";
  if (rota != "/") {
    icone = "imagens/home.png";
  }

  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src="/imagens/aluraflix-logo.png" alt="logo do Aluraflix" />
      <div className={styles.navigation}>
        <Botao to="/">
          <img src={icone} alt="Ícone home"/>
          HOME
        </Botao>
        <Link to="/novo">
          <img src="/imagens/adicionar.png" alt="Ícone adicionar" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;