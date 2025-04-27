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
                        <a href="https://www.google.com/maps?q=Av.+Brasil,+000+-+Logo+ali,+Rio+de+Janeiro+-+RJ" target="_blank" rel="noopener noreferrer">
                            <p>Av. Brasil, 000 - Logo ali, Rio de Janeiro - RJ</p>
                        </a>
                    </li>
                    <li>
                        <h3>Telefone</h3>
                        <a
                            href="https://wa.me/5521992117045"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            (21) 992117045
                        </a>
                    </li>
                    <li>
                        <h3>Email</h3>
                        <a href="mailto:docepatinha@gmail.com">docepatinha@gmail.com</a>
                    </li>
                </ul>
                <div className={styles.containerRedes}>
                    <div>
                        <h3>Doce Patinha</h3>
                        <img src={logoPet} alt="Logo do da Doce Patinha" />
                    </div>
                    <p>© 2025 Design/Code by Lucas Gomes</p>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <AiOutlineFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <AiOutlineLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <AiOutlineInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <AiOutlineYoutube />
                            </a>
                        </li>
                    </ul>
                </div>
        
            </div>

        </section>
      
    </footer>
  )
}

export default Footer
