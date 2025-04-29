
import styles from "./Login.module.scss"
import useScrollToTop from "../../hooks/UseScrollToTop";
import Input from "../../components/input/Input";
import ButtonBrown from "../../components/buttonBrown/ButtonBrown";
import { FaGoogle } from "react-icons/fa";
import Button from "../../components/button/Button";
import { RxEnter } from "react-icons/rx";


const Login = () => {
  useScrollToTop();
  
  return (
    <section className={styles.formBg}>
      <div className={styles.formContainer}>
        <h1>Entre com a sua conta</h1>
        <ButtonBrown  icon={<FaGoogle />} text="Entrar com o Google"/>
        <p>ou entre com o seu e-mail</p>
        <form>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            label="E-mail"
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            label="Senha"
          />
          <ButtonBrown  icon={<RxEnter />} text="Entrar"/>
          <p>Primeiro acesso ? <span>Cadastrar</span></p>
        </form>
      </div>
    </section>
  )
}

export default Login
