import styles from "./BotaoPadrao.module.css";

function BotaoPadrao({ children, type, salvarVideo = false, onClick }) {
  return (
    <button type={type} onClick={onClick}>{children}</button>
  );
}

export default BotaoPadrao;