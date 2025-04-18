import Contact from "./_components/contact/Contact"
import { Faq } from "./_components/faq/Faq"
import Hero from "./_components/hero/Hero"
import Informations from "./_components/informations/Informations"
import Participate from "./_components/participate/Participate"
import styles from "./Home.module.scss"


const Home = () => {
  return (
    <main className={styles.home}>
      <section id="inicio">
          <Hero />
      </section>
      <section id="participar">
        <Participate />
      </section>
      <section id="premios">
        <Informations />
      </section>
      <section id="duvidas">
        <Faq />
      </section>
      <section id="contato">
        <Contact />
      <section />
      </section>
    </main>
  )
}

export default Home
