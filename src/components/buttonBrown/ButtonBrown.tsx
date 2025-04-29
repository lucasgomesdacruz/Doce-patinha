import styles from "./ButtonBrown.module.scss"
import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  className?: string;
};

const ButtonBrown = ({ text, icon }: ButtonProps) => {
  return (
    <a className={styles.buttonBrown}>
      {icon && <span>{icon}</span>}
      {text}
    </a>
  );
};

export default ButtonBrown;
