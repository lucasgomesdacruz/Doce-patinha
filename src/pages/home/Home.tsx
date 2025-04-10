import Contact from "./_components/contact/Contact"
import Hero from "./_components/hero/Hero"
import Informations from "./_components/informations/Informations"
import Participate from "./_components/participate/Participate"
import styles from "./Home.module.scss"


const Home = () => {
  return (
    <main className={styles.home}>
      <section>
        <Hero />
        <Participate />
        <Informations />
        <Contact />
      </section>
    </main>
  )
}

export default Home
