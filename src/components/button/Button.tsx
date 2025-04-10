import { ReactNode } from "react"
import styles from "./Button.module.scss"

type ButtonProps = {
  text: string
  icon?: ReactNode
}

const Button = ({ text, icon }: ButtonProps) => {
  return (
    <a className={styles.button}>
      {icon && <span>{icon}</span>}
      {text}
    </a>
  )
}
export default Button

