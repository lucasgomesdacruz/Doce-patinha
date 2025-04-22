import Contact from "./_components/contact/Contact"
import { Faq } from "./_components/faq/Faq"
import Hero from "./_components/hero/Hero"
import Informations from "./_components/informations/Informations"
import Participate from "./_components/participate/Participate"
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <>
      <title>Promoção Doce Patinha – Concorra a prêmios incríveis para seu pet!</title>
      <meta name="description" content="Participe da promoção Doce Patinha e concorra a prêmios incríveis para seu pet. Veja como participar, conheça os prêmios e tire suas dúvidas!" />
      <meta name="keywords" content="promoção pet, doce patinha, sorteio pet, prêmios para pets, como participar, campanha animal, pets, cães, gatos, sorteio, cuidados com pets" />
      <meta name="author" content="Doce Patinha" />
      <meta name="robots" content="index, follow" />
        
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
        </section>
      </main>
    </>
    
  )
}

export default Home
