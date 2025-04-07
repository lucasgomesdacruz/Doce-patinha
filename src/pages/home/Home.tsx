import Hero from "./_components/hero/Hero"
import styles from "./Home.module.scss"


const Home = () => {
  return (
    <main className={styles.home}>
      {/* <h1>home</h1> */}
      <Hero />
    </main>
  )
}

export default Home
