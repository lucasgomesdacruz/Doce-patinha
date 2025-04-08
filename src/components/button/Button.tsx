import styles from "./Button.module.scss"
import React from 'react'

const Button = ({text}) => {
  return (
    <a className={styles.button}>
      {text}
    </a>
  )
}

export default Button
