
import styles from "./Login.module.scss"
import useScrollToTop from "../../hooks/UseScrollToTop";
import Input from "../../components/input/Input";
import ButtonBrown from "../../components/buttonBrown/ButtonBrown";
import { FaGoogle } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../services/firebaseConnection";

const schema = z.object({
  email: z.string().email("insira um email válido").min(1,"O campo é obrigatório."),
  password: z.string().min(1,"O campo senha é obrigatório.")
})

type FormData = z.infer<typeof schema>

const Login = () => {
  useScrollToTop();

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data:FormData) {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      console.log("longado com sucesso")
      navigate("/", { replace: true })
    })
    .catch(err => {
      console.log("errro ao longar")
      console.log(err)
    })
  }

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        console.log("Login com Google bem-sucedido");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("Erro ao logar com o Google:", error);
      });
  }
  
  return (
    <section className={styles.formBg}>
      <div className={styles.formContainer}>
        <h1>Entre com a sua conta</h1>
        <ButtonBrown  icon={<FaGoogle />} text="Entrar com o Google" onClick={handleGoogleLogin}/>
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
          <ButtonBrown  icon={<RxEnter />} text="Entrar" type="submit" />
          <p>Primeiro acesso ? <Link to="/register">Cadastrar</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login
