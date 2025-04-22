import styles from "./Register.module.scss"
import useScrollToTop from "../../hooks/UseScrollToTop";


const Register = () => {
  useScrollToTop();
  return (
    <div className={styles.container}>
      <h1>Opa, ainda estamos desenvolvendo essa parte</h1>
      <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Fox.png" alt="Fox" width="25" height="25" />
    </div>
  )
}

export default Register

