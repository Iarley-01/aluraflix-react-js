import styles from "./VideosList.module.css";

import Secao from "@/components/Secao";

function VideosList() {
  return (
    <section classList={styles.containerSecoes}>
      <Secao titulo="front-end" />
      <Secao titulo="back-end" />
      <Secao titulo="mobile" />
    </section>
  );
}

export default VideosList;