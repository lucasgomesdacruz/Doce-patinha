import styles from "./Faq.module.scss";
import { useState } from "react";
import imgFaq from "../../../../assets/faqimg.svg"

const faqData = [
  {
    question: "Quem pode participar da promoção?",
    answer:
      "Podem participar todas as pessoas físicas, maiores de 18 anos, residentes no Brasil e que cumpram os requisitos descritos no regulamento da promoção.",
  },
  {
    question: "Qual é o período de participação da promoção?",
    answer:
      "O período de participação vai de 01 de maio de 2025 até 30 de junho de 2025.",
  },
  {
    question: "Quais locais estão participando da promoção?",
    answer:
      "Todos os estabelecimentos participantes identificados com material promocional ou informados no site oficial da promoção.",
  },
  {
    question: "Qual é a área de abrangência da promoção?",
    answer:
      "A promoção é válida em território nacional, abrangendo todas as regiões do Brasil onde existirem pontos de venda participantes.",
  },
];

export function Faq() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className={styles.faqBg}>
      <div className={styles.containerContent}>
        <h2 className={styles.titleFaq}>Perguntas Frequentes</h2>
        {faqData.map((item, i) => (
          <div key={i} className={styles.containerFaq}>
            
            <div className={styles.containerButton} onClick={() => setActive(active === i ? null : i)}>
              <button
                type="button"
                className={styles.button}
                
              >
                {item.question}
              </button>
              <img src={imgFaq} alt="icone de faq" className={`${styles.icon} ${active === i ? styles.rotate : ""}`}/>
            </div>
            <p
              className={`${styles.resposta} ${
                active === i ? styles.open : ""
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
