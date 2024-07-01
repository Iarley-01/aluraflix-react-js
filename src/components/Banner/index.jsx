import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.card}>
        <div className={styles.textWrapper}>
          <h1>FRONT-END</h1>
          <h2>SEO com React</h2>
          <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c8mVlakBESE?si=YbJIuSqYbTAo59aL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default Banner;