import Hero from "./_components/hero/Hero"
import Participate from "./_components/participate/Participate"
import styles from "./Home.module.scss"


const Home = () => {
  return (
    <main className={styles.home}>
      <section>
        {/* <h1>home</h1> */}
        <Hero />
        <Participate />
      </section>
    </main>
  )
}

export default Home
