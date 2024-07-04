import styles from "./BotaoPadrao.module.css";

function BotaoPadrao({ children, type }) {
  return (
    <button type={type}>{children}</button>
  );
}

export default BotaoPadrao;