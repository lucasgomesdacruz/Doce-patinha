import styles from "./Button.module.scss"
import React from 'react'

type ButtonProps = {
  text: string
}

const Button = ({ text }: ButtonProps) => {
  return (
    <a className={styles.button}>
      {text}
    </a>
  )
}

export default Button

