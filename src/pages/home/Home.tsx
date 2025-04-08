import Hero from "./_components/hero/Hero"
import styles from "./Home.module.scss"


const Home = () => {
  return (
    <main className={styles.home}>
      <section>
        {/* <h1>home</h1> */}
        <Hero />
      </section>
    </main>
  )
}

export default Home
