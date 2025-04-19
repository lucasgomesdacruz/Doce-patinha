import { Link } from "react-router-dom"
import logoPet from "../../assets/logoPet.svg"
import styles from "./Header.module.scss"

import { Link as ScrollLink } from 'react-scroll'



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <div className={styles.containerLogo}>
            <h1>Doce Patinha</h1>
            <img src={logoPet} alt="Logo do da Doce Patinha" />
          </div>
          <ul>
              <li>
                <ScrollLink className={styles.navLink} to="inicio" smooth={true} duration={500} offset={-80}>
                  Início
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className={styles.navLink} to="participar" smooth={true} duration={500} offset={-80}>
                  Como participar
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className={styles.navLink} to="premios" smooth={true} duration={500} offset={-80}>
                  Prêmios
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className={styles.navLink} to="duvidas" smooth={true} duration={500} offset={-80}>
                  Dúvidas
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className={styles.navLink} to="contato" smooth={true} duration={500} offset={-80}>
                  Contatos
                </ScrollLink>
              </li>
          </ul>
              
          <div className={styles.enterForm}>
            <Link to="#">Entrar</Link>
            <Link to="#" className={styles.create}>Cadastrar</Link>
          </div>
      </div>
    </header>
  )
}

export default Header
