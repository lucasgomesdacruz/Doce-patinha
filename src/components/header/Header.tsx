import { Link } from "react-router-dom"
import styles from "./Header.module.scss"


const Header = () => {
  return (
    <header className={styles.header}>
      <div>
          <h1>Pet Friend</h1>
          <ul>
            <li>Início</li>
            <li>Como participar</li>
            <li>Prêmios</li>
            <li>Dúvidas</li>
          </ul>
          <div>
            <Link to="#">Entrar</Link>
            <Link to="#">Cadastrar</Link>
          </div>
      </div>
    </header>
  )
}

export default Header
