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
            <div className={styles.containerImg}>
                <img src={imgBg} alt="imagem de uma mulher beijando a testa do seu pet" />
            </div>
            <div className={styles.containerText}>
                <h3>Contatos</h3>
                <p>Precisa de mais informações? Estamos à disposição! Entre em contato para retirar dúvidas.</p>
                <div>
                    <MdOutlineMail />
                    <p>docepatinha@gmail.com</p>
                </div>
                <div>
                    <LuPhone />
                    <p>(21) 992117045</p>
                </div>

                <Button icon={<FaWhatsapp />} text="Dúvidas ?" />
            </div>
        </div>
      
    </section>
  )
}

export default Contact
