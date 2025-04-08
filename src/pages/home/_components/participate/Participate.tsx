import styles from "./participate.module.scss"

import participateImg from "../../../../assets/participate.svg"
import check from "../../../../assets/check.svg"
import titleImG from "../../../../assets/titleimgparticipate.svg"

import Button from "../../../../components/button/Button"

const Participate = () => {
  return (
    <section className={styles.participateBg}>
      <section className={styles.participateContainer}>
        <div className={styles.participateText}>
          <h2>Confira como participar<img src={titleImG} alt="imagem de um coração com uma patinha no meio" /></h2>
          <ul>
            <li>
                <img src={check} alt="imagem simbolizando que está correto" /><p>Compre R$ 100 e Ganhe um número da sorte</p>
            </li>
            <li>
                <img src={check} alt="imagem simbolizando que está correto" /><p>Faça o login ou crie sua conta</p>
            </li>
            <li>
                <img src={check} alt="imagem simbolizando que está correto" /><p>Cadastre seu cupom</p>
            </li>
            <li>
                <img src={check} alt="imagem simbolizando que está correto" /><p>Pronto! Você já está concorrendo.</p>
            </li>
          </ul>
          <Button text="Cadastre seu Cupom"/>
        </div>
        <figure>
          <img src={participateImg} alt="imagem ilustrativa de um cachorro" />
          <figcaption className="sr-only">Cachorro feliz ilustrando promoção de compras grátis</figcaption>
        </figure>
          
        
      </section>
    </section>
  )
}

export default Participate
