import { Link } from "react-router-dom";

import styles from "./Header.module.css";

import logo from "./aluraflix-logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo do Aluraflix" />
      <nav>
        <Link>
          Home
        </Link>
        <Link>
          Novo Vídeo
        </Link>
      </nav>
    </header>
  );
}

export default Header;