import styles from "./Home.module.css";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import VideosList from "@/components/VideosList";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <VideosList />
    </>
  );
}

export default Home;