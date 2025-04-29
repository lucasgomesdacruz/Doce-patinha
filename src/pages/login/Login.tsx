
import styles from "./Login.module.scss"
import useScrollToTop from "../../hooks/UseScrollToTop";
import Input from "../../components/input/Input";
import ButtonBrown from "../../components/buttonBrown/ButtonBrown";
import { FaGoogle } from "react-icons/fa";
// import Button from "../../components/button/Button";
import { RxEnter } from "react-icons/rx";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email("insira um email válido").min(1,"O campo é obrigatório."),
  password: z.string().min(1,"O campo senha é obrigatório.")
})

type FormData = z.infer<typeof schema>

const Login = () => {
  useScrollToTop();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data:FormData) {
    console.log(data)
  }
  
  return (
    <section className={styles.formBg}>
      <div className={styles.formContainer}>
        <h1>Entre com a sua conta</h1>
        <ButtonBrown  icon={<FaGoogle />} text="Entrar com o Google"/>
        <p>ou entre com o seu e-mail</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            label="E-mail"
            error={errors.email?.message}
            register={register}
          />
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            label="Senha"
            error={errors.password?.message}
            register={register}
          />
          <ButtonBrown  icon={<RxEnter />} text="Entrar"/>
          <p>Primeiro acesso ? <Link to="/register">Cadastrar</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login
