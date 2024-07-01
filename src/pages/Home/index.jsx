import styles from "./Home.module.css";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Secao from "@/components/Secao";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Secao titulo="front-end" />
      <Secao titulo="back-end" />
      <Secao titulo="mobile" />
    </>
  );
}

export default Home;