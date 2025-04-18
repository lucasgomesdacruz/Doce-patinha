import styles from "./Contact.module.scss"

import imgBg from "../../../../assets/contactImg.png"

import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import Button from "../../../../components/button/Button";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className={styles.contactBg}>
        <div className={styles.contactContainer}>
            <figure className={styles.containerImg}>
                <img src={imgBg} alt="imagem de uma mulher beijando a testa do seu pet" />
            </figure>
            <div className={styles.containerText}>
                <h3>Contatos</h3>
                <p>Precisa de mais informações? Estamos à disposição! Entre em contato para retirar dúvidas.</p>
                
                <address className={styles.address}>
                    <div>
                        <MdOutlineMail aria-hidden="true" />
                        <a href="mailto:docepatinha@gmail.com">docepatinha@gmail.com</a>
                    </div>
                    <div>
                        <LuPhone />
                        <a
                            href="https://wa.me/5521992117045"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsappBtn}
                        >
                            (21) 992117045
                        </a>
                    </div>
                </address>

                <Button className={styles.button} icon={<FaWhatsapp />} text="Dúvidas ?"/>
            </div>
        </div>
      
    </section>
  )
}

export default Contact
