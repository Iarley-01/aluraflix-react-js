import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/imagens/aluraflix-logo.png" alt="logo do Aluraflix" />
      <div>
        <button><img src="/imagens/home.png" alt="Ícone Home" /> HOME</button>
        <img src="/imagens/adicionar.png" alt="Ícone adicionar" />
      </div>
    </footer>
  );
}

export default Footer;