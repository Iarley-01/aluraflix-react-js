import styles from "./Home.module.css";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import VideosList from "@/components/VideosList";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <VideosList />
      <Footer />
    </>
  );
}

export default Home;