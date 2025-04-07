import { Link } from "react-router-dom"
import logoPet from "../../assets/logoPet.svg"
import styles from "./Header.module.scss"


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
              <Link to="#">
                Início
              </Link>
              
            </li>
            <li>
              <Link to="#">
                Como participar
              </Link>
            </li>
            <li>
              <Link to="#">
                Prêmios
              </Link>
              
            </li>
            <li>
              <Link to="#">
                Dúvidas
              </Link>
             
            </li>
          </ul>
          <div className={styles.enterForm}>
            <Link to="#">Entrar</Link>
            <Link to="#">Cadastrar</Link>
          </div>
      </div>
    </header>
  )
}

export default Header
