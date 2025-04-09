import Button from "../../../../components/button/Button"
import styles from "./informations.module.scss"

import informationsImg from "../../../../assets/informationsImg.svg"


const Informations = () => {
  return (
    <section className={styles.informationsBg}>
      
      <section className={styles.informationsContainer}>
        <div className={styles.informationsText}>
          <h2>Mais de 20 clientes da Doce patinha serão premiados com R$ 4.140 em compras na Doce patinha, cada um. São R$ 345 por mês para abastecer a rotina do pet.</h2>
          <p>O valor será disponibilizado em voucher Doce patinha, que podem ser usados no site, no app ou em nossas lojas físicas.</p>
          <Button text="Cadastre seu Cupom"/>
        </div>
        <figure>
          <img src={informationsImg} alt="imagem ilustrativa de um cachorro" />
          <figcaption className="sr-only">Cachorro feliz ilustrando promoção de compras grátis</figcaption>
        </figure>
          
        
      </section>
    </section>
  )
}

export default Informations
