
import styles from "./Login.module.scss"
import useScrollToTop from "../../hooks/UseScrollToTop";


const Login = () => {
  useScrollToTop();
  

  return (
    <div className={styles.container}>
      <h1>Opa, ainda estamos desenvolvendo essa parte</h1>
      <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Cat%20Face.png" alt="Cat Face" width="25" height="25" />
    </div>
  )
}

export default Login
