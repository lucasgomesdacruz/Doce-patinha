import styles from "./Footer.module.scss"

import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import logoPet from "../../assets/logoPet.svg"







const Footer = () => {
  return (
    <footer className={styles.footerBg}>
        <section className={styles.footerContainer}>
            <div className={styles.textContainer}>
                <ul className={styles.informationsContainer}>
                    <li>
                        <h3>Horário de funcionamento</h3>
                        <p>Segunda a sexta de 07:30 as 18:00</p>
                    </li>
                    <li>
                        <h3>Endereço</h3>
                        <p>Av. Brasil, 000 - Logo ali, Rio de Janeiro - RJ</p>
                    </li>
                    <li>
                        <h3>Telefone</h3>
                        <p>0800 888 0000</p>
                    </li>
                    <li>
                        <h3>Email</h3>
                        <p>docepatinha@gmail.com</p>
                    </li>
                </ul>
                <div className={styles.containerRedes}>
                    <div>
                        <h3>Doce Patinha</h3>
                        <img src={logoPet} alt="Logo do da Doce Patinha" />
                    </div>
                    <p>© 2025 Design/Code by Lucas Gomes</p>
                    <ul>
                        <li><AiOutlineFacebook /></li>
                        <li><AiOutlineLinkedin /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineYoutube /></li>
                    </ul>
                </div>
        
            </div>

        </section>
      
    </footer>
  )
}

export default Footer
