
import styles from "./Register.module.scss"
import useScrollToTop from "../../hooks/UseScrollToTop";
import Input from "../../components/input/Input";
import ButtonBrown from "../../components/buttonBrown/ButtonBrown";
import { RxEnter } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConnection";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const schema = z.object({
  name: z.string().min(1,"O campo nome é obrigatório."),
  email: z.string().email("insira um email válido").min(1,"O campo é obrigatório."),
  password: z.string().min(8,"A senha deve ter pelo menos 8 caracteres").min(1, "O campo senha é obrigatorio"),
  cpf: z.string()
    .min(1, "O campo CPF é obrigatório.")
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Insira um CPF válido (ex: 000.000.000-00)")
})

type FormData = z.infer<typeof schema>

const Register = () => {
  useScrollToTop();

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  async function onSubmit(data:FormData) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (user) => {
      await updateProfile(user.user, {
        displayName: data.name
      })

      console.log("cadastrado com sucesso!")
      console.log(user)
      navigate("/", { replace: true })
    })
    .catch((error) => {
      console.log("error ao cadastrar esse usuário")
      console.log(error);
    })
  }
  
  return (
    <section className={styles.formBg}>
      <div className={styles.formContainer}>
        <h1>Cadastre-se</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Digite seu nome"
            name="name"
            label="Nome"
            error={errors.name?.message}
            register={register}
          />
          <Input
            type="text"
            placeholder="Digite seu CPF"
            name="cpf"
            label="CPF"
            error={errors.cpf?.message}
            register={register}
          />
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
          <ButtonBrown  icon={<RxEnter />} text="Cadastrar" type="submit"/>
          <p>Já possui uma conta ? <Link to="/login">Entrar</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Register