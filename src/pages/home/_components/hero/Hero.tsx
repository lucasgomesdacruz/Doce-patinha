import heroImg from "../../../../assets/heroimg.svg"

import Button from "../../../../components/button/Button.tsx"
import styles from "./Hero.module.scss"

const Hero = () => {
  return (
    <section className={styles.heroBg}>
      
      <section className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>Nas compras a partir de $100 concorra a 1 ano de compras grátis</h1>
          <p>1 Ganhador por semana</p>
          <Button text="QUERO PARTICIPAR"/>
        </div>
        <figure>
          <img src={heroImg} alt="imagem ilustrativa de um cachorro" />
          <figcaption className="sr-only">Cachorro feliz ilustrando promoção de compras grátis</figcaption>
        </figure>
          
        
      </section>
    </section>
  )
}

export default Hero