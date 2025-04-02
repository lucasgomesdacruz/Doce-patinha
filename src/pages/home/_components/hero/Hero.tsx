import banner from "../../../../assets/bannerSortei.png"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src={banner} alt="" />
    </div>
  )
}

export default Hero
