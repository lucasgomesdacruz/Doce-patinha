import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import logoPet from "../../assets/logoPet.svg"
import styles from "./Header.module.scss"
import { MdClose, MdMenu } from "react-icons/md"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    closeMenu()

    const scrollToSection = () => {
      const element = document.getElementById(id)
      if (element) {

        const yOffset = -80
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }

    if (location.pathname !== "/") {
      navigate("/", { replace: false })
      setTimeout(scrollToSection, 100)
    } else {
      scrollToSection()
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.containerLogo}>
          <h1>Doce Patinha</h1>
          <img src={logoPet} alt="Logo da Doce Patinha" />
        </Link>

        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
          <li><a href="#inicio" className={styles.navLink} onClick={(e) => handleNavClick(e, "inicio")}>Início</a></li>
          <li><a href="#participar" className={styles.navLink} onClick={(e) => handleNavClick(e, "participar")}>Como participar</a></li>
          <li><a href="#premios" className={styles.navLink} onClick={(e) => handleNavClick(e, "premios")}>Prêmios</a></li>
          <li><a href="#duvidas" className={styles.navLink} onClick={(e) => handleNavClick(e, "duvidas")}>Dúvidas</a></li>
          <li><a href="#contato" className={styles.navLink} onClick={(e) => handleNavClick(e, "contato")}>Contatos</a></li>

          {/* Botões Mobile */}
          <li className={styles.mobileButtons}>
            <Link to="/login" onClick={closeMenu}>Entrar</Link>
            <Link to="/register" className={styles.create} onClick={closeMenu}>Cadastrar</Link>
          </li>
        </ul>

        {/* Botões Desktop */}
        <div className={styles.enterForm}>
          <Link to="/login" onClick={closeMenu}>Entrar</Link>
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
