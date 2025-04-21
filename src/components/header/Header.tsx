import { useState } from "react"
import { Link } from "react-router-dom"
import logoPet from "../../assets/logoPet.svg"
import styles from "./Header.module.scss"

import { Link as ScrollLink } from 'react-scroll'
import { MdClose, MdMenu } from "react-icons/md"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/"  className={styles.containerLogo}>
          <h1>Doce Patinha</h1>
          <img src={logoPet} alt="Logo da Doce Patinha" />
        </Link>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
          <li><ScrollLink className={styles.navLink} to="inicio" smooth duration={500} offset={-80} onClick={closeMenu}>Início</ScrollLink></li>
          <li><ScrollLink className={styles.navLink} to="participar" smooth duration={500} offset={-80} onClick={closeMenu}>Como participar</ScrollLink></li>
          <li><ScrollLink className={styles.navLink} to="premios" smooth duration={500} offset={-80} onClick={closeMenu}>Prêmios</ScrollLink></li>
          <li><ScrollLink className={styles.navLink} to="duvidas" smooth duration={500} offset={-80} onClick={closeMenu}>Dúvidas</ScrollLink></li>
          <li><ScrollLink className={styles.navLink} to="contato" smooth duration={500} offset={-80} onClick={closeMenu}>Contatos</ScrollLink></li>

          {/* Botões Mobile */}
          <li className={styles.mobileButtons}>
            <Link to="/entrar" onClick={closeMenu}>Entrar</Link>
            <Link to="/register" className={styles.create} onClick={closeMenu}>Cadastrar</Link>
          </li>
        </ul>

        {/* Botões Desktop */}
        <div className={styles.enterForm}>
          <Link to="/entrar" onClick={closeMenu}>Entrar</Link>
          <Link to="/register" className={styles.create} onClick={closeMenu}>Cadastrar</Link>
        </div>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Abrir menu">
          {isMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>
    </header>
  )
}

export default Header
